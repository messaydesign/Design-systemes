import { UserIcon } from "@/registry/main/ui/icons"
import { Toggle } from "@/registry/main/ui/toggle"

export default function ToggleWithText() {
  return (
    <>
      <Toggle variant="outline">
        <UserIcon />
        Only my tasks
      </Toggle>
      <Toggle variant="outline" size="sm" defaultPressed>
        Show archived
      </Toggle>
    </>
  )
}
