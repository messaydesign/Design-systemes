import { Field, FieldControl, FieldLabel, FieldMessage } from "@/registry/main/ui/field"
import { Input } from "@/registry/main/ui/input"

export default function InputWithField() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="full-name" requirement="Required">
        Full name
      </FieldLabel>
      <FieldControl>
        <Input id="full-name" autoComplete="name" required aria-describedby="full-name-help" />
      </FieldControl>
      <FieldMessage id="full-name-help">As it appears on your ID.</FieldMessage>
    </Field>
  )
}
