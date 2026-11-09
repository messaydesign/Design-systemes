import { Button } from "@/registry/main/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/main/ui/dropdown-menu"
import { CloseIcon, FileIcon, PlusIcon } from "@/registry/main/ui/icons"

// variant="destructive" colours the label; keep destructive items last, after a separator.
export default function DropdownMenuDestructive() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">File actions</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem>
          <FileIcon />
          Open
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PlusIcon />
          Duplicate
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <FileIcon />
          Move (no permission)
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <CloseIcon />
          Delete file
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
