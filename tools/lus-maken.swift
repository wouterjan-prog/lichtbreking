import AVFoundation
import Foundation

// Maakt een naadloos lussende, webklare video uit een zwaar bronbestand.
// De laatste seconde vloeit over in het begin, zodat de lus geen zichtbare snit heeft.
//
// gebruik: lus <bron> <uit> <codec> <breedte> <bitrate> <start> <duur> <overvloei>

let a = CommandLine.arguments
guard a.count >= 9 else { print("te weinig argumenten"); exit(1) }
let bron = URL(fileURLWithPath: a[1]), uit = URL(fileURLWithPath: a[2])
let codecNaam = a[3], doelBreedte = Int(a[4])!, bitrate = Int(a[5])!
let start = Double(a[6])!, duur = Double(a[7])!, fade = Double(a[8])!

let asset = AVURLAsset(url: bron)
guard let spoor = asset.tracks(withMediaType: .video).first else { print("geen videospoor"); exit(1) }

let ts: CMTimeScale = 600
func T(_ s: Double) -> CMTime { CMTime(seconds: s, preferredTimescale: ts) }

let natuurlijk = spoor.naturalSize.applying(spoor.preferredTransform)
let bronB = abs(natuurlijk.width), bronH = abs(natuurlijk.height)
// Exact het tempo van de bron aanhouden. Afronden naar 25 zou bij 24 fps
// frames verdubbelen en juist schokken geven.
let bronFrameDuur = spoor.minFrameDuration
let fps: Float = CMTIME_IS_VALID(bronFrameDuur) && bronFrameDuur.seconds > 0
    ? Float((1.0 / bronFrameDuur.seconds).rounded())
    : max(spoor.nominalFrameRate.rounded(), 24)
let schaal = CGFloat(doelBreedte) / bronB
var doelH = Int((bronH * schaal).rounded()); if doelH % 2 != 0 { doelH += 1 }
let uitDuur = duur - fade

// Twee sporen: de basis, en het begin dat er aan het eind overheen komt vloeien.
let comp = AVMutableComposition()
let basis = comp.addMutableTrack(withMediaType: .video, preferredTrackID: kCMPersistentTrackID_Invalid)!
let kop = comp.addMutableTrack(withMediaType: .video, preferredTrackID: kCMPersistentTrackID_Invalid)!
try! basis.insertTimeRange(CMTimeRange(start: T(start + fade), duration: T(uitDuur)), of: spoor, at: .zero)
try! kop.insertTimeRange(CMTimeRange(start: T(start), duration: T(fade)), of: spoor, at: T(uitDuur - fade))

let renderSize = CGSize(width: doelBreedte, height: doelH)
func transform(_ tr: AVAssetTrack) -> CGAffineTransform {
    var t = spoor.preferredTransform.concatenating(CGAffineTransform(scaleX: schaal, y: schaal))
    let hoek = CGRect(origin: .zero, size: spoor.naturalSize).applying(t)
    return t.concatenating(CGAffineTransform(translationX: -hoek.origin.x, y: -hoek.origin.y))
}

let instructie = AVMutableVideoCompositionInstruction()
instructie.timeRange = CMTimeRange(start: .zero, duration: T(uitDuur))
let liKop = AVMutableVideoCompositionLayerInstruction(assetTrack: kop)
liKop.setTransform(transform(kop), at: .zero)
liKop.setOpacityRamp(fromStartOpacity: 0, toEndOpacity: 1,
                     timeRange: CMTimeRange(start: T(uitDuur - fade), duration: T(fade)))
liKop.setOpacity(0, at: .zero)
let liBasis = AVMutableVideoCompositionLayerInstruction(assetTrack: basis)
liBasis.setTransform(transform(basis), at: .zero)
instructie.layerInstructions = [liKop, liBasis]   // eerste ligt bovenop

let vc = AVMutableVideoComposition()
vc.renderSize = renderSize
vc.frameDuration = CMTIME_IS_VALID(bronFrameDuur) && bronFrameDuur.seconds > 0 ? bronFrameDuur : CMTime(value: 1, timescale: CMTimeScale(fps))
vc.instructions = [instructie]

print("bron \(Int(bronB))x\(Int(bronH)) @ \(Int(fps)) fps | knip \(start)s tot \(start+duur)s | overvloei \(fade)s | uit: \(doelBreedte)x\(doelH), \(String(format: "%.1f", uitDuur))s, \(codecNaam) \(bitrate/1000) kbps")

let lezer = try! AVAssetReader(asset: comp)
let uitvoer = AVAssetReaderVideoCompositionOutput(
    videoTracks: comp.tracks(withMediaType: .video),
    videoSettings: [kCVPixelBufferPixelFormatTypeKey as String: kCVPixelFormatType_420YpCbCr8BiPlanarVideoRange])
uitvoer.videoComposition = vc
uitvoer.alwaysCopiesSampleData = false
lezer.add(uitvoer)

try? FileManager.default.removeItem(at: uit)
let schrijver = try! AVAssetWriter(outputURL: uit, fileType: .mp4)
schrijver.shouldOptimizeForNetworkUse = true
var compressie: [String: Any] = [
    AVVideoAverageBitRateKey: bitrate,
    AVVideoMaxKeyFrameIntervalKey: Int(fps * 2),
    AVVideoAllowFrameReorderingKey: true,
]
let codec: AVVideoCodecType = codecNaam == "hevc" ? .hevc : .h264
if codec == .h264 { compressie[AVVideoProfileLevelKey] = AVVideoProfileLevelH264HighAutoLevel }
let invoer = AVAssetWriterInput(mediaType: .video, outputSettings: [
    AVVideoCodecKey: codec, AVVideoWidthKey: doelBreedte, AVVideoHeightKey: doelH,
    AVVideoCompressionPropertiesKey: compressie])
invoer.expectsMediaDataInRealTime = false
schrijver.add(invoer)

schrijver.startWriting(); schrijver.startSession(atSourceTime: .zero); lezer.startReading()
let wacht = DispatchSemaphore(value: 0)
var n = 0
invoer.requestMediaDataWhenReady(on: DispatchQueue(label: "lus")) {
    while invoer.isReadyForMoreMediaData {
        if let s = uitvoer.copyNextSampleBuffer() { invoer.append(s); n += 1 }
        else { invoer.markAsFinished(); schrijver.finishWriting { wacht.signal() }; return }
    }
}
wacht.wait()
if schrijver.status == .completed {
    let b = (try! FileManager.default.attributesOfItem(atPath: uit.path)[.size] as! Int)
    print("klaar: \(n) frames, \(String(format: "%.1f", Double(b)/1_048_576)) MB")
} else { print("mislukt: \(String(describing: schrijver.error))"); exit(1) }
