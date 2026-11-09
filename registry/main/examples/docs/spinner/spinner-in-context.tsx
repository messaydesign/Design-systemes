import { Badge } from "@/registry/main/ui/badge"
import { Button } from "@/registry/main/ui/button"
import { Spinner } from "@/registry/main/ui/spinner"

export default function SpinnerInContext() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="outline" disabled>
        <Spinner size="sm" label="Exporting" />
        Exporting
      </Button>
      <Badge variant="secondary">
        <Spinner size="sm" label="Syncing" />
        Syncing
      </Badge>
    </div>
  )
}
