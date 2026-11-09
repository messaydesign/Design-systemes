import { Button } from "@/registry/main/ui/button"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/registry/main/ui/empty"
import { WarningIcon } from "@/registry/main/ui/icons"

export default function EmptyError() {
  return (
    <Empty role="alert" className="max-w-lg">
      <EmptyHeader>
        <EmptyMedia className="text-[var(--status-error-text)]">
          <WarningIcon />
        </EmptyMedia>
        <EmptyTitle>Couldn’t load messages</EmptyTitle>
        <EmptyDescription>
          Something went wrong on our side. Try again, or <a href="#status">check the status page</a>.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Try again</Button>
      </EmptyContent>
    </Empty>
  )
}
