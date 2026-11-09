import { Button } from "@/registry/main/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/main/ui/popover"

const sides = ["top", "right", "bottom", "left"] as const

// side and align place the panel; it flips automatically when there isn't room.
export default function PopoverSide() {
  return (
    <div className="flex flex-wrap gap-2">
      {sides.map((side) => (
        <Popover key={side}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="capitalize">
              {side}
            </Button>
          </PopoverTrigger>
          <PopoverContent side={side} align="start" className="w-56" aria-label={`${side} popover`}>
            <p>
              Opens on the <strong>{side}</strong>, aligned to the start of the trigger.
            </p>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  )
}
