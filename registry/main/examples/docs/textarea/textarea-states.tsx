import { Field, FieldLabel } from "@/registry/main/ui/field"
import { Textarea } from "@/registry/main/ui/textarea"

export default function TextareaStates() {
  return (
    <div className="grid w-full max-w-md gap-6">
      <Field>
        <FieldLabel htmlFor="ta-required" requirement="Required">
          Delivery instructions
        </FieldLabel>
        <Textarea id="ta-required" required className="min-h-20" />
      </Field>
      <Field>
        <FieldLabel htmlFor="ta-readonly">Original request</FieldLabel>
        <Textarea id="ta-readonly" readOnly className="min-h-20" defaultValue="Please leave the parcel with the neighbour at number 12." />
      </Field>
      <Field disabled>
        <FieldLabel htmlFor="ta-disabled">Internal notes</FieldLabel>
        <Textarea id="ta-disabled" disabled className="min-h-20" placeholder="Only admins can add notes." />
      </Field>
    </div>
  )
}
