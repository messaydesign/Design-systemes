import { AspectRatio } from "@/registry/main/ui/aspect-ratio"

export default function AspectRatioDemo() {
  return (
    <div className="w-full max-w-md">
      <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg border border-border">
        <div
          role="img"
          aria-label="Product video thumbnail"
          className="flex size-full items-center justify-center bg-gradient-to-br from-primary-subtle to-muted text-sm text-muted-foreground"
        >
          16:9
        </div>
      </AspectRatio>
    </div>
  )
}
