import { AspectRatio } from "@/registry/main/ui/aspect-ratio"

const ratios = [
  { label: "16:9", ratio: 16 / 9 },
  { label: "4:3", ratio: 4 / 3 },
  { label: "1:1", ratio: 1 },
  { label: "3:4", ratio: 3 / 4 },
]

export default function AspectRatioRatios() {
  return (
    <div className="grid w-full grid-cols-2 items-start gap-4 sm:grid-cols-4">
      {ratios.map(({ label, ratio }) => (
        <figure key={label} className="flex flex-col gap-2">
          <AspectRatio ratio={ratio} className="overflow-hidden rounded-lg bg-muted">
            <div aria-hidden="true" className="size-full bg-gradient-to-br from-primary-subtle to-muted" />
          </AspectRatio>
          <figcaption className="text-sm text-muted-foreground">{label}</figcaption>
        </figure>
      ))}
    </div>
  )
}
