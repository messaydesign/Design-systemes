import { Button } from "@/registry/main/ui/button"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/registry/main/ui/empty"
import { SearchIcon } from "@/registry/main/ui/icons"

export default function EmptyFiltered() {
  return (
    <Empty className="max-w-lg">
      <EmptyHeader>
        <EmptyMedia>
          <SearchIcon />
        </EmptyMedia>
        <EmptyTitle>No results for “invoice 2019”</EmptyTitle>
        <EmptyDescription>Try a different search term or remove some filters.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">Clear filters</Button>
      </EmptyContent>
    </Empty>
  )
}
