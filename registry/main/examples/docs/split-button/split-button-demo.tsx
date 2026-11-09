import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/main/ui/dropdown-menu"
import { SplitButton, SplitButtonAction, SplitButtonTrigger } from "@/registry/main/ui/split-button"

export default function SplitButtonDemo() {
  return (
    <SplitButton aria-label="Publish options">
      <SplitButtonAction>Publish</SplitButtonAction>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SplitButtonTrigger aria-label="More publish options" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Schedule for later</DropdownMenuItem>
          <DropdownMenuItem>Publish to staging</DropdownMenuItem>
          <DropdownMenuItem>Save as draft</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SplitButton>
  )
}
