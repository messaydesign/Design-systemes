import { Button } from "@/registry/main/ui/button"
import { ButtonGroup } from "@/registry/main/ui/button-group"
import { MinusIcon, PlusIcon } from "@/registry/main/ui/icons"

export default function ButtonGroupOrientation() {
  return (
    <div className="flex items-start gap-6">
      <ButtonGroup orientation="vertical" aria-label="Zoom">
        <Button variant="outline" size="icon" aria-label="Zoom in">
          <PlusIcon />
        </Button>
        <Button variant="outline" size="icon" aria-label="Zoom out">
          <MinusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup orientation="vertical" aria-label="Sort">
        <Button variant="outline">Newest first</Button>
        <Button variant="outline">Oldest first</Button>
        <Button variant="outline">Most popular</Button>
      </ButtonGroup>
    </div>
  )
}
