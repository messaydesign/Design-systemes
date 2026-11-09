import { Button } from "@/registry/main/ui/button"
import { PlusIcon } from "@/registry/main/ui/icons"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/registry/main/ui/tooltip"

export default function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon" aria-label="New project">
          <PlusIcon />
        </Button>
      </TooltipTrigger>
      <TooltipContent>New project</TooltipContent>
    </Tooltip>
  )
}
