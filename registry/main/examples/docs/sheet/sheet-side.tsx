import { Button } from "@/registry/main/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/main/ui/sheet"

const sides = [
  { side: "start", label: "Start (leading)" },
  { side: "end", label: "End (trailing)" },
  { side: "top", label: "Top" },
  { side: "bottom", label: "Bottom" },
] as const

// "start" and "end" are logical and swap in right-to-left layouts.
export default function SheetSide() {
  return (
    <div className="flex flex-wrap gap-2">
      {sides.map(({ side, label }) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline">{label}</Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Opens from the {side}</SheetTitle>
              <SheetDescription>
                {side === "top" || side === "bottom"
                  ? "Full width, up to 80% of the viewport height."
                  : "Full height, up to 480px wide."}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
