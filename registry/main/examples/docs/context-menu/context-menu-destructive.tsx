import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/registry/main/ui/context-menu"
import { CloseIcon, FileIcon, PlusIcon } from "@/registry/main/ui/icons"

// Every command in a context menu must also be reachable elsewhere (a toolbar or a "More" button).
export default function ContextMenuDestructive() {
  return (
    <ContextMenu>
      <ContextMenuTrigger tabIndex={0} className="outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-ring flex w-full max-w-80 items-center gap-4 rounded-lg border border-border p-4">
        <FileIcon className="size-6 text-muted-foreground" aria-hidden />
        <span className="flex flex-col">
          <span className="font-medium">Invoice-2041.pdf</span>
          <span className="text-sm text-muted-foreground">Right-click for file actions</span>
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          <FileIcon />
          Open
        </ContextMenuItem>
        <ContextMenuItem>
          <PlusIcon />
          Duplicate
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <CloseIcon />
          Move to trash
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
