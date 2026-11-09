import { Field, FieldControl, FieldDescription, FieldLabel, FieldMessage } from "@/registry/main/ui/field"
import { Input } from "@/registry/main/ui/input"

export default function FieldDemo() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="username" requirement="Required">
        Username
      </FieldLabel>
      <FieldDescription id="username-desc">Shown on your profile and in mentions.</FieldDescription>
      <FieldControl>
        <Input id="username" required aria-describedby="username-desc username-help" />
      </FieldControl>
      <FieldMessage id="username-help">Letters, numbers and dashes only.</FieldMessage>
    </Field>
  )
}
