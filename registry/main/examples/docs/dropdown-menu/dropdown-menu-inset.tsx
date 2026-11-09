import { Button } from "@/registry/main/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/registry/main/ui/dropdown-menu"
import { FileIcon } from "@/registry/main/ui/icons"

// inset adds 40px start padding so text lines up with items that have a 16px icon.
export default function DropdownMenuInset() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Recent files</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuLabel inset>Recent</DropdownMenuLabel>
        <DropdownMenuItem>
          <FileIcon />
          Brand guidelines.pdf
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FileIcon />
          Launch plan.docx
        </DropdownMenuItem>
        <DropdownMenuItem inset>Show all files</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
