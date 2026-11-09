import { FileIcon, ChevronRightIcon } from "@/registry/main/ui/icons"
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/registry/main/ui/item"

export default function ItemAsLink() {
  return (
    <Item
      asChild
      variant="outline"
      className="max-w-md hover:bg-[var(--surface-hover)] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[var(--button-focus-color)]"
    >
      <a href="#item-as-link">
        <ItemMedia>
          <FileIcon className="size-6" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Quarterly report.pdf</ItemTitle>
          <ItemDescription>2.4 MB · updated yesterday</ItemDescription>
        </ItemContent>
        <ChevronRightIcon className="size-4" />
      </a>
    </Item>
  )
}
