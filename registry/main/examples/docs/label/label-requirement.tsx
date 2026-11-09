import { Field, FieldLabel } from "@/registry/main/ui/field"
import { Input } from "@/registry/main/ui/input"

export default function LabelRequirement() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <Field>
        <FieldLabel htmlFor="req-name" requirement="Required">
          Full name
        </FieldLabel>
        <Input id="req-name" autoComplete="name" required />
      </Field>
      <Field>
        <FieldLabel htmlFor="req-company" requirement="Optional">
          Company
        </FieldLabel>
        <Input id="req-company" autoComplete="organization" />
      </Field>
    </div>
  )
}
