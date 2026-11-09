import { Button } from "@/registry/main/ui/button"
import { ButtonGroup } from "@/registry/main/ui/button-group"

const sizes = ["xs", "sm", "default", "lg", "xl"] as const

export default function ButtonGroupSizes() {
  return (
    <div className="flex flex-col items-center gap-6">
      {sizes.map((size) => (
        <ButtonGroup key={size} aria-label={`Text alignment, ${size}`}>
          <Button variant="outline" size={size}>
            Left
          </Button>
          <Button variant="outline" size={size}>
            Centre
          </Button>
          <Button variant="outline" size={size}>
            Right
          </Button>
        </ButtonGroup>
      ))}
    </div>
  )
}
