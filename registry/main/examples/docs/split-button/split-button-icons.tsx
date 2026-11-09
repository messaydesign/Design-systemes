import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/main/ui/dropdown-menu"
import { PlusIcon } from "@/registry/main/ui/icons"
import { SplitButton, SplitButtonAction, SplitButtonTrigger } from "@/registry/main/ui/split-button"

export default function SplitButtonIcons() {
  return (
    <SplitButton aria-label="Create">
      <SplitButtonAction>
        <PlusIcon />
        New document
      </SplitButtonAction>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SplitButtonTrigger aria-label="Choose what to create" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>New folder</DropdownMenuItem>
          <DropdownMenuItem>New spreadsheet</DropdownMenuItem>
          <DropdownMenuItem>Upload file</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SplitButton>
  )
}
