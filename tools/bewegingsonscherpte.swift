import AVFoundation
import Foundation

// Voegt bewegingsonscherpte toe aan een naadloos lussende video, door elk beeldje
// te mengen met het vorige en het volgende. Symmetrisch, zodat het beeld niet in
// de tijd verschuift. De lus blijft heel: de randen lopen rond.
//
// gebruik: vervaag <lus-in> <uit> <codec> <breedte> <bitrate> <sterkte 0..0.33>

let a = CommandLine.arguments
guard a.count >= 7 else { print("te weinig argumenten"); exit(1) }
let inUrl = URL(fileURLWithPath: a[1]), uit = URL(fileURLWithPath: a[2])
let codecNaam = a[3], doelBreedte = Int(a[4])!, bitrate = Int(a[5])!
let w = Double(a[6])!            // gewicht van elk buurbeeldje

let asset = AVURLAsset(url: inUrl)
guard let spoor = asset.tracks(withMediaType: .video).first else { exit(1) }
let D = asset.duration
let stap = spoor.minFrameDuration
let fpsWaarde = 1.0 / stap.seconds

let natuurlijk = spoor.naturalSize.applying(spoor.preferredTransform)
let bronB = abs(natuurlijk.width), bronH = abs(natuurlijk.height)
let schaal = CGFloat(doelBreedte) / bronB
var doelH = Int((bronH * schaal).rounded()); if doelH % 2 != 0 { doelH += 1 }

let comp = AVMutableComposition()
func maakSpoor() -> AVMutableCompositionTrack {
    comp.addMutableTrack(withMediaType: .video, preferredTrackID: kCMPersistentTrackID_Invalid)!
}
// vorige: op tijd t het beeldje van t - stap, met de staart die vooraan terugkomt
let vorige = maakSpoor()
try! vorige.insertTimeRange(CMTimeRange(start: CMTimeSubtract(D, stap), duration: stap), of: spoor, at: .zero)
try! vorige.insertTimeRange(CMTimeRange(start: .zero, duration: CMTimeSubtract(D, stap)), of: spoor, at: stap)
// midden: ongewijzigd
let midden = maakSpoor()
try! midden.insertTimeRange(CMTimeRange(start: .zero, duration: D), of: spoor, at: .zero)
// volgende: op tijd t het beeldje van t + stap, met de kop die achteraan terugkomt
let volgende = maakSpoor()
try! volgende.insertTimeRange(CMTimeRange(start: stap, duration: CMTimeSubtract(D, stap)), of: spoor, at: .zero)
try! volgende.insertTimeRange(CMTimeRange(start: .zero, duration: stap), of: spoor, at: CMTimeSubtract(D, stap))

func transform() -> CGAffineTransform {
    var t = spoor.preferredTransform.concatenating(CGAffineTransform(scaleX: schaal, y: schaal))
    let hoek = CGRect(origin: .zero, size: spoor.naturalSize).applying(t)
    return t.concatenating(CGAffineTransform(translationX: -hoek.origin.x, y: -hoek.origin.y))
}

// Lagen stapelen met normaal overlappen: resultaat = o1*L1 + (1-o1)*(o2*L2 + (1-o2)*L3)
// Gewenst: w*vorige + (1-2w)*midden + w*volgende
let o1 = Float(w)
let o2 = Float((1 - 2 * w) / (1 - w))
func laag(_ t: AVMutableCompositionTrack, _ op: Float) -> AVMutableVideoCompositionLayerInstruction {
    let li = AVMutableVideoCompositionLayerInstruction(assetTrack: t)
    li.setTransform(transform(), at: .zero)
    li.setOpacity(op, at: .zero)
    return li
}
let instructie = AVMutableVideoCompositionInstruction()
instructie.timeRange = CMTimeRange(start: .zero, duration: D)
instructie.layerInstructions = [laag(vorige, o1), laag(midden, o2), laag(volgende, 1)]

let vc = AVMutableVideoComposition()
vc.renderSize = CGSize(width: doelBreedte, height: doelH)
vc.frameDuration = stap
vc.instructions = [instructie]

print("vervaag \(String(format: "%.0f", fpsWaarde)) fps | sterkte \(w) per buur | lagen \(String(format: "%.3f", o1)) / \(String(format: "%.3f", o2)) / 1 | uit \(doelBreedte)x\(doelH) \(codecNaam) \(bitrate/1000) kbps")

let lezer = try! AVAssetReader(asset: comp)
let uitvoer = AVAssetReaderVideoCompositionOutput(
    videoTracks: comp.tracks(withMediaType: .video),
    videoSettings: [kCVPixelBufferPixelFormatTypeKey as String: kCVPixelFormatType_420YpCbCr8BiPlanarVideoRange])
uitvoer.videoComposition = vc
lezer.add(uitvoer)

try? FileManager.default.removeItem(at: uit)
let schrijver = try! AVAssetWriter(outputURL: uit, fileType: .mp4)
schrijver.shouldOptimizeForNetworkUse = true
var compressie: [String: Any] = [AVVideoAverageBitRateKey: bitrate,
                                 AVVideoMaxKeyFrameIntervalKey: Int(fpsWaarde * 2),
                                 AVVideoAllowFrameReorderingKey: true]
let codec: AVVideoCodecType = codecNaam == "hevc" ? .hevc : .h264
if codec == .h264 { compressie[AVVideoProfileLevelKey] = AVVideoProfileLevelH264HighAutoLevel }
let invoer = AVAssetWriterInput(mediaType: .video, outputSettings: [
    AVVideoCodecKey: codec, AVVideoWidthKey: doelBreedte, AVVideoHeightKey: doelH,
    AVVideoCompressionPropertiesKey: compressie])
invoer.expectsMediaDataInRealTime = false
schrijver.add(invoer)
schrijver.startWriting(); schrijver.startSession(atSourceTime: .zero); lezer.startReading()
let wacht = DispatchSemaphore(value: 0); var n = 0
invoer.requestMediaDataWhenReady(on: DispatchQueue(label: "vervaag")) {
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
