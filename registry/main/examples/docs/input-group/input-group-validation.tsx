import { Field, FieldControl, FieldLabel, FieldMessage } from "@/registry/main/ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@/registry/main/ui/input-group"

const states = [
  { validation: "error", value: "my handle", message: "Use letters, numbers and dashes only." },
  { validation: "warning", value: "admin", message: "This handle looks like a staff account." },
  { validation: "success", value: "ada-l", message: "Available." },
] as const

export default function InputGroupValidation() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      {states.map(({ validation, value, message }) => (
        <Field key={validation} validation={validation}>
          <FieldLabel htmlFor={`handle-${validation}`}>Handle</FieldLabel>
          <FieldControl>
            <InputGroup>
              <InputGroupAddon>
                <InputGroupText className="text-muted-foreground">@</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput
                id={`handle-${validation}`}
                defaultValue={value}
                aria-invalid={validation === "error" || undefined}
                aria-describedby={`handle-${validation}-msg`}
              />
            </InputGroup>
          </FieldControl>
          <FieldMessage id={`handle-${validation}-msg`}>{message}</FieldMessage>
        </Field>
      ))}
    </div>
  )
}
