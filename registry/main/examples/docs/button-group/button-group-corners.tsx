import { Button } from "@/registry/main/ui/button"
import { ButtonGroup } from "@/registry/main/ui/button-group"

const corners = ["default", "soft", "pill"] as const

export default function ButtonGroupCorners() {
  return (
    <div className="flex flex-col items-center gap-6">
      {corners.map((corner) => (
        <ButtonGroup key={corner} corner={corner} aria-label={`View, ${corner} corners`}>
          <Button variant="outline">Day</Button>
          <Button variant="outline">Week</Button>
          <Button variant="outline">Month</Button>
        </ButtonGroup>
      ))}
    </div>
  )
}
