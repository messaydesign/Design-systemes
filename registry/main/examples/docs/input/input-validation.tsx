import { Field, FieldControl, FieldLabel, FieldMessage } from "@/registry/main/ui/field"
import { Input } from "@/registry/main/ui/input"

const states = [
  { validation: "error", message: "Enter a valid email address." },
  { validation: "warning", message: "This address is used by another account." },
  { validation: "success", message: "Email verified." },
] as const

export default function InputValidation() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      {states.map(({ validation, message }) => (
        <Field key={validation} validation={validation}>
          <FieldLabel htmlFor={`email-${validation}`}>Email</FieldLabel>
          <FieldControl>
            <Input
              id={`email-${validation}`}
              type="email"
              defaultValue="name@example"
              aria-invalid={validation === "error" || undefined}
              aria-describedby={`email-${validation}-msg`}
            />
          </FieldControl>
          <FieldMessage id={`email-${validation}-msg`}>{message}</FieldMessage>
        </Field>
      ))}
    </div>
  )
}
