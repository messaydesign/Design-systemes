import { Button } from "@/registry/main/ui/button"
import { ButtonGroup } from "@/registry/main/ui/button-group"
import { ChevronLeftIcon, ChevronRightIcon } from "@/registry/main/ui/icons"

export default function ButtonGroupNested() {
  return (
    <ButtonGroup aria-label="Page controls">
      <ButtonGroup>
        <Button variant="outline" size="sm">
          1
        </Button>
        <Button variant="outline" size="sm">
          2
        </Button>
        <Button variant="outline" size="sm">
          3
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="icon-sm" aria-label="Previous page">
          <ChevronLeftIcon />
        </Button>
        <Button variant="outline" size="icon-sm" aria-label="Next page">
          <ChevronRightIcon />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  )
}
