import { Button } from "@/registry/main/ui/button"
import { ButtonGroup, ButtonGroupSeparator } from "@/registry/main/ui/button-group"

export default function ButtonGroupVariants() {
  return (
    <div className="flex flex-col items-center gap-6">
      <ButtonGroup aria-label="Outline actions">
        <Button variant="outline">Copy</Button>
        <Button variant="outline">Paste</Button>
      </ButtonGroup>
      {/* Filled buttons have no visible border, so add a separator between them. */}
      <ButtonGroup aria-label="Secondary actions">
        <Button variant="secondary">Copy</Button>
        <ButtonGroupSeparator />
        <Button variant="secondary">Paste</Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Primary actions">
        <Button>Save</Button>
        <ButtonGroupSeparator />
        <Button>Publish</Button>
      </ButtonGroup>
    </div>
  )
}
