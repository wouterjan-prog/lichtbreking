import AVFoundation
import AppKit
import Foundation

let args = CommandLine.arguments
guard args.count >= 4 else { print("gebruik: frame <bron> <uit.jpg> <seconde> [breedte] [kwaliteit]"); exit(1) }
let asset = AVURLAsset(url: URL(fileURLWithPath: args[1]))
let uit = URL(fileURLWithPath: args[2])
let sec = Double(args[3])!
let breedte = args.count > 4 ? Double(args[4])! : 0
let kwaliteit = args.count > 5 ? Double(args[5])! : 0.86

let gen = AVAssetImageGenerator(asset: asset)
gen.appliesPreferredTrackTransform = true
gen.requestedTimeToleranceBefore = .zero
gen.requestedTimeToleranceAfter = .zero
if breedte > 0 { gen.maximumSize = CGSize(width: breedte, height: 10000) }

let cg = try! gen.copyCGImage(at: CMTime(seconds: sec, preferredTimescale: 600), actualTime: nil)
let rep = NSBitmapImageRep(cgImage: cg)
let data = rep.representation(using: .jpeg, properties: [.compressionFactor: kwaliteit])!
try! data.write(to: uit)
print("\(uit.lastPathComponent): \(cg.width)x\(cg.height), \(String(format: "%.0f", Double(data.count)/1024)) kB")
