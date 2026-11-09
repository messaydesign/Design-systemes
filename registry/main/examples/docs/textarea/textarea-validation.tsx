import { Field, FieldLabel, FieldMessage } from "@/registry/main/ui/field"
import { Textarea } from "@/registry/main/ui/textarea"

const states = [
  { validation: "error", value: "", message: "Describe the problem so we can help." },
  { validation: "warning", value: "It doesn’t work.", message: "Add steps to reproduce for a faster answer." },
  { validation: "success", value: "Exports fail when the file name contains an emoji.", message: "Thanks — that’s detailed enough." },
] as const

export default function TextareaValidation() {
  return (
    <div className="grid w-full max-w-md gap-6">
      {states.map(({ validation, value, message }) => (
        <Field key={validation} validation={validation}>
          <FieldLabel htmlFor={`issue-${validation}`}>What went wrong?</FieldLabel>
          <Textarea
            id={`issue-${validation}`}
            defaultValue={value}
            className="min-h-20"
            aria-invalid={validation === "error" || undefined}
            aria-describedby={`issue-${validation}-msg`}
          />
          <FieldMessage id={`issue-${validation}-msg`}>{message}</FieldMessage>
        </Field>
      ))}
    </div>
  )
}
