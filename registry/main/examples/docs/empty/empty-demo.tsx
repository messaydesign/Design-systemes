import { Button } from "@/registry/main/ui/button"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/registry/main/ui/empty"
import { FileIcon, PlusIcon } from "@/registry/main/ui/icons"

export default function EmptyDemo() {
  return (
    <Empty className="max-w-lg">
      <EmptyHeader>
        <EmptyMedia>
          <FileIcon />
        </EmptyMedia>
        <EmptyTitle>No projects yet</EmptyTitle>
        <EmptyDescription>Create a project to start tracking work with your team.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>
          <PlusIcon />
          New project
        </Button>
        <Button variant="outline">Import</Button>
      </EmptyContent>
    </Empty>
  )
}
