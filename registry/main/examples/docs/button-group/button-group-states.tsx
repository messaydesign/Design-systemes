import { Button } from "@/registry/main/ui/button"
import { ButtonGroup } from "@/registry/main/ui/button-group"

export default function ButtonGroupStates() {
  return (
    <div className="flex flex-col items-center gap-6">
      <ButtonGroup aria-label="Draft actions">
        <Button variant="outline">Preview</Button>
        <Button variant="outline" loading loadingText="Saving">
          Save draft
        </Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Review actions">
        <Button variant="outline">Request changes</Button>
        <Button variant="outline" disabled>
          Approve
        </Button>
      </ButtonGroup>
    </div>
  )
}
