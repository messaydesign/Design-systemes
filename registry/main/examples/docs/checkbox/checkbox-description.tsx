import { Checkbox } from "@/registry/main/ui/checkbox"
import { Field, FieldContent, FieldDescription, FieldLabel } from "@/registry/main/ui/field"

export default function CheckboxDescription() {
  return (
    <Field orientation="horizontal" className="max-w-sm gap-1">
      <Checkbox id="marketing" defaultChecked aria-describedby="marketing-help" />
      <FieldContent className="gap-0 pt-1">
        <FieldLabel htmlFor="marketing">Product updates</FieldLabel>
        <FieldDescription id="marketing-help">
          One email a month about new features. Unsubscribe at any time.
        </FieldDescription>
      </FieldContent>
    </Field>
  )
}
