import { Button } from "@/registry/main/ui/button"
import { ArrowRightIcon, PlusIcon } from "@/registry/main/ui/icons"

export default function ButtonIcons() {
  return (
    <>
      <Button>
        <PlusIcon />
        New project
      </Button>
      <Button variant="outline">
        Next
        <ArrowRightIcon />
      </Button>
      <Button size="icon" variant="secondary" aria-label="Add item">
        <PlusIcon />
      </Button>
      <Button size="icon-sm" variant="ghost" aria-label="Add item">
        <PlusIcon />
      </Button>
    </>
  )
}
