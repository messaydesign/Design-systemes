import { Button } from "@/registry/main/ui/button"
import { ButtonGroup, ButtonGroupText } from "@/registry/main/ui/button-group"
import { Input } from "@/registry/main/ui/input"

export default function ButtonGroupWithText() {
  return (
    <ButtonGroup className="w-full max-w-sm">
      <ButtonGroupText asChild>
        <label htmlFor="button-group-url">https://</label>
      </ButtonGroupText>
      <Input id="button-group-url" placeholder="my-site.example.com" />
      <Button variant="outline" size="xs">
        Check
      </Button>
    </ButtonGroup>
  )
}
