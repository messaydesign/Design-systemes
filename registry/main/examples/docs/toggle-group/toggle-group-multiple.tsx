import { CheckIcon, FileIcon, UserIcon } from "@/registry/main/ui/icons"
import { ToggleGroup, ToggleGroupItem } from "@/registry/main/ui/toggle-group"

export default function ToggleGroupMultiple() {
  return (
    <ToggleGroup type="multiple" defaultValue={["mine"]} aria-label="Filter tasks">
      <ToggleGroupItem value="mine">
        <UserIcon />
        Mine
      </ToggleGroupItem>
      <ToggleGroupItem value="files">
        <FileIcon />
        With files
      </ToggleGroupItem>
      <ToggleGroupItem value="done">
        <CheckIcon />
        Done
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
