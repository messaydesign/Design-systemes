import { Field, FieldControl, FieldLabel, FieldMessage } from "@/registry/main/ui/field"
import { Input } from "@/registry/main/ui/input"

const cases = [
  { validation: "none", message: "Helper text explains the field." },
  { validation: "error", message: "Enter a value between 1 and 100." },
  { validation: "warning", message: "Unusually high — double-check it." },
  { validation: "success", message: "Looks good." },
] as const

export default function FieldValidation() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      {cases.map(({ validation, message }) => (
        <Field key={validation} validation={validation}>
          <FieldLabel htmlFor={`qty-${validation}`}>Quantity ({validation})</FieldLabel>
          <FieldControl>
            <Input
              id={`qty-${validation}`}
              inputMode="numeric"
              defaultValue="120"
              aria-invalid={validation === "error" || undefined}
              aria-describedby={`qty-${validation}-msg`}
            />
          </FieldControl>
          <FieldMessage id={`qty-${validation}-msg`}>{message}</FieldMessage>
        </Field>
      ))}
    </div>
  )
}
