import { Button } from "@/registry/main/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/registry/main/ui/tooltip"

// Figma Top / Bottom / Start / End. Radix sides are physical ("left" / "right");
// they flip automatically when there isn't room.
const sides = ["top", "bottom", "left", "right"] as const

export default function TooltipSide() {
  return (
    <div className="flex flex-wrap gap-2">
      {sides.map((side) => (
        <Tooltip key={side}>
          <TooltipTrigger asChild>
            <Button variant="outline" className="capitalize">
              {side}
            </Button>
          </TooltipTrigger>
          <TooltipContent side={side}>Shown on the {side}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}
