import { Button } from "@/registry/main/ui/button"
import { ButtonGroup } from "@/registry/main/ui/button-group"

export default function ButtonGroupDemo() {
  return (
    <ButtonGroup aria-label="Message actions">
      <Button variant="outline">Archive</Button>
      <Button variant="outline">Report</Button>
      <Button variant="outline">Snooze</Button>
    </ButtonGroup>
  )
}
