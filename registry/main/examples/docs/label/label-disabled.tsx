import { Field, FieldLabel } from "@/registry/main/ui/field"
import { Input } from "@/registry/main/ui/input"

export default function LabelDisabled() {
  return (
    <Field disabled className="max-w-sm">
      <FieldLabel htmlFor="label-disabled-id">Account ID</FieldLabel>
      <Input id="label-disabled-id" disabled defaultValue="ACC-20931" />
    </Field>
  )
}
