import { FileIcon } from "@/registry/main/ui/icons"
import { Toggle } from "@/registry/main/ui/toggle"

export default function ToggleDisabled() {
  return (
    <>
      <Toggle disabled aria-label="Show hidden files">
        <FileIcon />
      </Toggle>
      <Toggle variant="outline" disabled defaultPressed aria-label="Show hidden files">
        <FileIcon />
      </Toggle>
    </>
  )
}
