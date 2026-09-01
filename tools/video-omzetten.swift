import AVFoundation
import CoreImage
import Foundation

// Zet een zware brontvideo om naar een webvriendelijke hero-loop.
// Gebruikt alleen AVFoundation, dus geen externe tools nodig.

let args = CommandLine.arguments
guard args.count >= 6 else {
    print("gebruik: hero <bron> <uit> <codec:h264|hevc> <breedte> <bitrate>")
    exit(1)
}
let bron = URL(fileURLWithPath: args[1])
let uit = URL(fileURLWithPath: args[2])
let codecNaam = args[3]
let doelBreedte = Int(args[4])!
let bitrate = Int(args[5])!

let asset = AVURLAsset(url: bron)
guard let spoor = asset.tracks(withMediaType: .video).first else {
    print("geen videospoor gevonden"); exit(1)
}

let natuurlijk = spoor.naturalSize.applying(spoor.preferredTransform)
let bronB = abs(natuurlijk.width), bronH = abs(natuurlijk.height)
let fps = spoor.nominalFrameRate
print("bron: \(Int(bronB))x\(Int(bronH)) @ \(String(format: "%.2f", fps)) fps, \(String(format: "%.2f", CMTimeGetSeconds(asset.duration))) s")

// Doelmaat, even getallen (encoders willen dat)
let schaal = CGFloat(doelBreedte) / bronB
var doelH = Int((bronH * schaal).rounded())
if doelH % 2 != 0 { doelH += 1 }
let renderSize = CGSize(width: doelBreedte, height: doelH)
print("doel: \(doelBreedte)x\(doelH), \(codecNaam), \(bitrate / 1000) kbps")

// Videocompositie die schaalt en de oriëntatie respecteert
let compositie = AVMutableVideoComposition()
compositie.renderSize = renderSize
compositie.frameDuration = CMTime(value: 1, timescale: CMTimeScale(max(fps.rounded(), 25)))

let instructie = AVMutableVideoCompositionInstruction()
instructie.timeRange = CMTimeRange(start: .zero, duration: asset.duration)
let laag = AVMutableVideoCompositionLayerInstruction(assetTrack: spoor)
var t = spoor.preferredTransform
t = t.concatenating(CGAffineTransform(scaleX: schaal, y: schaal))
// terugschuiven als de transform het beeld buiten beeld duwt
let hoek = CGRect(origin: .zero, size: spoor.naturalSize).applying(t)
t = t.concatenating(CGAffineTransform(translationX: -hoek.origin.x, y: -hoek.origin.y))
laag.setTransform(t, at: .zero)
instructie.layerInstructions = [laag]
compositie.instructions = [instructie]

// Lezer
let lezer = try! AVAssetReader(asset: asset)
let uitvoer = AVAssetReaderVideoCompositionOutput(
    videoTracks: asset.tracks(withMediaType: .video),
    videoSettings: [kCVPixelBufferPixelFormatTypeKey as String: kCVPixelFormatType_420YpCbCr8BiPlanarVideoRange]
)
uitvoer.videoComposition = compositie
uitvoer.alwaysCopiesSampleData = false
lezer.add(uitvoer)

// Schrijver
try? FileManager.default.removeItem(at: uit)
let schrijver = try! AVAssetWriter(outputURL: uit, fileType: .mp4)
schrijver.shouldOptimizeForNetworkUse = true   // fast start, begint eerder met spelen

var compressie: [String: Any] = [
    AVVideoAverageBitRateKey: bitrate,
    AVVideoMaxKeyFrameIntervalKey: Int((max(fps.rounded(), 25)) * 2),
    AVVideoAllowFrameReorderingKey: true,
]
let codec: AVVideoCodecType
if codecNaam == "hevc" {
    codec = .hevc
} else {
    codec = .h264
    compressie[AVVideoProfileLevelKey] = AVVideoProfileLevelH264HighAutoLevel
}

let invoer = AVAssetWriterInput(mediaType: .video, outputSettings: [
    AVVideoCodecKey: codec,
    AVVideoWidthKey: doelBreedte,
    AVVideoHeightKey: doelH,
    AVVideoCompressionPropertiesKey: compressie,
])
invoer.expectsMediaDataInRealTime = false
schrijver.add(invoer)

schrijver.startWriting()
schrijver.startSession(atSourceTime: .zero)
lezer.startReading()

let wachten = DispatchSemaphore(value: 0)
let rij = DispatchQueue(label: "hero.encode")
var aantal = 0
invoer.requestMediaDataWhenReady(on: rij) {
    while invoer.isReadyForMoreMediaData {
        if let sample = uitvoer.copyNextSampleBuffer() {
            invoer.append(sample)
            aantal += 1
        } else {
            invoer.markAsFinished()
            schrijver.finishWriting { wachten.signal() }
            return
        }
    }
}
wachten.wait()

if schrijver.status == .completed {
    let bytes = (try? FileManager.default.attributesOfItem(atPath: uit.path)[.size] as? Int) ?? 0
    print("klaar: \(aantal) frames, \(String(format: "%.1f", Double(bytes ?? 0) / 1_048_576)) MB")
} else {
    print("mislukt: \(String(describing: schrijver.error))")
    exit(1)
}
