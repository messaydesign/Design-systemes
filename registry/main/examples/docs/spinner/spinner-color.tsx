import { Spinner } from "@/registry/main/ui/spinner"

export default function SpinnerColor() {
  return (
    <div className="flex items-center gap-6">
      <Spinner className="text-foreground" />
      <Spinner className="text-muted-foreground" />
      <Spinner className="text-primary" />
      <Spinner className="text-destructive" />
    </div>
  )
}
