import { FileIcon } from "@/registry/main/ui/icons"
import { Toggle } from "@/registry/main/ui/toggle"

export default function ToggleDemo() {
  return (
    <Toggle aria-label="Show hidden files">
      <FileIcon />
    </Toggle>
  )
}
