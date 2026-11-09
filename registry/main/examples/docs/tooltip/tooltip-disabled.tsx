import { Button } from "@/registry/main/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/registry/main/ui/tooltip"

// Disabled buttons don't fire pointer or focus events. Wrap them in a focusable span
// so the tooltip can still explain why the action is unavailable.
export default function TooltipDisabled() {
  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <span tabIndex={0} className="inline-flex rounded-lg">
          <Button disabled className="pointer-events-none">
            Publish
          </Button>
        </span>
      </TooltipTrigger>
      <TooltipContent>Add a title before publishing</TooltipContent>
    </Tooltip>
  )
}
