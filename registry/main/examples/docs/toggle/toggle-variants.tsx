import { CheckIcon } from "@/registry/main/ui/icons"
import { Toggle } from "@/registry/main/ui/toggle"

export default function ToggleVariants() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Toggle aria-label="Mark as done">
        <CheckIcon />
      </Toggle>
      <Toggle defaultPressed aria-label="Mark as done">
        <CheckIcon />
      </Toggle>
      <Toggle variant="outline" aria-label="Mark as done">
        <CheckIcon />
      </Toggle>
      <Toggle variant="outline" defaultPressed aria-label="Mark as done">
        <CheckIcon />
      </Toggle>
    </div>
  )
}
