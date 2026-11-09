import { FileIcon } from "@/registry/main/ui/icons"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/registry/main/ui/hover-card"

// openDelay / closeDelay (ms) tune how eagerly the card appears and how long it waits
// before closing, so the pointer can travel into it.
export default function HoverCardDelay() {
  return (
    <HoverCard openDelay={100} closeDelay={400}>
      <HoverCardTrigger asChild>
        <a href="#" className="inline-flex items-center gap-2 underline underline-offset-4">
          <FileIcon className="size-4" aria-hidden />
          Q3-roadmap.pdf
        </a>
      </HoverCardTrigger>
      <HoverCardContent align="start">
        <p className="font-semibold">Q3 roadmap</p>
        <p className="text-muted-foreground">PDF · 2.4 MB · Updated yesterday by Dana</p>
      </HoverCardContent>
    </HoverCard>
  )
}
