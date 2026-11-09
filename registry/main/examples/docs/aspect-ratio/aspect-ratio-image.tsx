import { AspectRatio } from "@/registry/main/ui/aspect-ratio"

// Inline SVG so the example needs no network request. Use next/image or <img> with your own file.
const placeholder =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="#e5e5e5"/><path d="M0 300 140 150l80 80 60-50 120 120Z" fill="#a3a3a3"/><circle cx="300" cy="80" r="32" fill="#a3a3a3"/></svg>`
  )

export default function AspectRatioImage() {
  return (
    <div className="w-full max-w-xs">
      <AspectRatio ratio={4 / 3} className="overflow-hidden rounded-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={placeholder} alt="Mountain landscape at dusk" className="size-full object-cover" />
      </AspectRatio>
    </div>
  )
}
