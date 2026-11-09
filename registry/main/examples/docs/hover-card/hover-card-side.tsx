import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/registry/main/ui/hover-card"

const sides = ["top", "right", "bottom", "left"] as const

export default function HoverCardSide() {
  return (
    <div className="flex flex-wrap gap-6">
      {sides.map((side) => (
        <HoverCard key={side}>
          <HoverCardTrigger asChild>
            <a href="#" className="capitalize underline underline-offset-4">
              {side}
            </a>
          </HoverCardTrigger>
          <HoverCardContent side={side} className="w-64">
            <p className="font-semibold">Preview on the {side}</p>
            <p className="text-muted-foreground">It flips to the opposite side when there isn’t room.</p>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}
