import { Field, FieldError, FieldLabel, FieldLegend, FieldSet } from "@/registry/main/ui/field"
import { RadioGroup, RadioGroupItem } from "@/registry/main/ui/radio-group"

export default function RadioGroupValidation() {
  return (
    <FieldSet className="max-w-sm">
      <FieldLegend variant="label">Contact preference</FieldLegend>
      <RadioGroup name="contact" required aria-invalid aria-describedby="contact-msg" className="gap-y-0">
        {["Email", "Phone"].map((option) => (
          <div key={option} className="flex items-center gap-1">
            <RadioGroupItem value={option.toLowerCase()} id={`contact-${option.toLowerCase()}`} aria-invalid />
            <FieldLabel htmlFor={`contact-${option.toLowerCase()}`}>{option}</FieldLabel>
          </div>
        ))}
      </RadioGroup>
      <Field validation="error">
        <FieldError id="contact-msg">Choose how we should contact you.</FieldError>
      </Field>
    </FieldSet>
  )
}
