import { Button } from "@/registry/main/ui/button"
import { Kbd } from "@/registry/main/ui/kbd"

export default function KbdButton() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="outline" aria-keyshortcuts="Control+S">
        Save draft <Kbd className="h-6 px-1.5 text-xs">Ctrl S</Kbd>
      </Button>
      <Button variant="ghost" aria-keyshortcuts="Escape">
        Cancel <Kbd className="h-6 px-1.5 text-xs">Esc</Kbd>
      </Button>
    </div>
  )
}
