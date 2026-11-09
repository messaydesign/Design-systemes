import { Checkbox } from "@/registry/main/ui/checkbox"
import { Field, FieldError, FieldLabel } from "@/registry/main/ui/field"

export default function CheckboxValidation() {
  return (
    <Field validation="error" className="max-w-sm gap-0">
      <div className="flex items-center gap-1">
        <Checkbox id="terms-invalid" aria-invalid aria-describedby="terms-invalid-msg" required />
        <FieldLabel htmlFor="terms-invalid">I agree to the terms of service</FieldLabel>
      </div>
      <FieldError id="terms-invalid-msg" className="ps-13">
        Accept the terms to continue.
      </FieldError>
    </Field>
  )
}
