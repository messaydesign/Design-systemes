import { Progress } from "@/registry/main/ui/progress"

export default function ProgressValues() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      {[0, 25, 50, 75, 100].map((value) => (
        <div key={value} className="flex items-center gap-4">
          <Progress value={value} aria-label={`Example at ${value}%`} />
          <span className="w-10 shrink-0 text-end text-sm tabular-nums text-muted-foreground">{value}%</span>
        </div>
      ))}
    </div>
  )
}
