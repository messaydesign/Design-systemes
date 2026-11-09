import { Field, FieldLabel } from "@/registry/main/ui/field"
import { PlusIcon } from "@/registry/main/ui/icons"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupText, InputGroupTextarea } from "@/registry/main/ui/input-group"

export default function InputGroupWithTextarea() {
  return (
    <Field className="max-w-md">
      <FieldLabel htmlFor="comment">Comment</FieldLabel>
      <InputGroup>
        <InputGroupTextarea id="comment" placeholder="Leave a comment" />
        <InputGroupAddon align="block-end" className="justify-between">
          <InputGroupButton size="icon-xs" aria-label="Attach a file">
            <PlusIcon />
          </InputGroupButton>
          <InputGroupText className="text-muted-foreground">Markdown supported</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}
