import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/registry/main/ui/empty"
import { UserIcon } from "@/registry/main/ui/icons"

export default function EmptyMediaVariants() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-2">
      <Empty>
        <EmptyHeader>
          <EmptyMedia>
            <UserIcon />
          </EmptyMedia>
          <EmptyTitle>default</EmptyTitle>
          <EmptyDescription>Bare 32px icon, as in Figma.</EmptyDescription>
        </EmptyHeader>
      </Empty>
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <UserIcon />
          </EmptyMedia>
          <EmptyTitle>icon</EmptyTitle>
          <EmptyDescription>24px icon on a 48px muted tile.</EmptyDescription>
        </EmptyHeader>
      </Empty>
    </div>
  )
}
