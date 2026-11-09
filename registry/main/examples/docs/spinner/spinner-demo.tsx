import { Spinner } from "@/registry/main/ui/spinner"

export default function SpinnerDemo() {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Spinner size="sm" label="Processing payment" />
      <span aria-hidden="true">Processing payment…</span>
    </div>
  )
}
