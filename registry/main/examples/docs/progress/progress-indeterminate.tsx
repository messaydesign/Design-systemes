import { Progress } from "@/registry/main/ui/progress"

export default function ProgressIndeterminate() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <span id="sync-label" className="text-sm leading-6 font-medium">
        Syncing contacts…
      </span>
      <Progress value={null} aria-labelledby="sync-label" />
    </div>
  )
}
