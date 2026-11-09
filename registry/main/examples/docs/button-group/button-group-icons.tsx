import { Button } from "@/registry/main/ui/button"
import { ButtonGroup } from "@/registry/main/ui/button-group"
import { ChevronLeftIcon, ChevronRightIcon, MinusIcon, PlusIcon } from "@/registry/main/ui/icons"

export default function ButtonGroupIcons() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      <ButtonGroup aria-label="Zoom">
        <Button variant="outline" size="icon" aria-label="Zoom out">
          <MinusIcon />
        </Button>
        <Button variant="outline" size="icon" aria-label="Zoom in">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Pages">
        <Button variant="outline">
          <ChevronLeftIcon />
          Previous
        </Button>
        <Button variant="outline">
          Next
          <ChevronRightIcon />
        </Button>
      </ButtonGroup>
    </div>
  )
}
