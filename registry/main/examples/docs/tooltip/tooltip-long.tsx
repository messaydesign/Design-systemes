import { InfoIcon } from "@/registry/main/ui/icons"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/registry/main/ui/tooltip"

// Text wraps at 192px. Keep it to a sentence; anything longer belongs in a Popover.
export default function TooltipLong() {
  return (
    <p className="flex items-center gap-2">
      Monthly active users
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            aria-label="About monthly active users"
            className="inline-flex size-6 items-center justify-center rounded-full text-muted-foreground outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <InfoIcon className="size-4" />
          </button>
        </TooltipTrigger>
        <TooltipContent side="right">People who opened the app at least once in the last 30 days.</TooltipContent>
      </Tooltip>
    </p>
  )
}
