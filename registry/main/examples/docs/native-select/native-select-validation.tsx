import { Field, FieldControl, FieldLabel, FieldMessage } from "@/registry/main/ui/field"
import { NativeSelect, NativeSelectOption } from "@/registry/main/ui/native-select"

const states = [
  { validation: "error", value: "", message: "Choose a shipping method." },
  { validation: "warning", value: "freight", message: "Freight takes 10–14 working days." },
  { validation: "success", value: "express", message: "Arrives tomorrow." },
] as const

export default function NativeSelectValidation() {
  return (
    <div className="grid w-full max-w-xs gap-6">
      {states.map(({ validation, value, message }) => (
        <Field key={validation} validation={validation}>
          <FieldLabel htmlFor={`shipping-${validation}`}>Shipping</FieldLabel>
          <FieldControl>
            <NativeSelect
              id={`shipping-${validation}`}
              defaultValue={value}
              aria-invalid={validation === "error" || undefined}
              aria-describedby={`shipping-${validation}-msg`}
            >
              <NativeSelectOption value="" disabled>
                Select a method
              </NativeSelectOption>
              <NativeSelectOption value="standard">Standard</NativeSelectOption>
              <NativeSelectOption value="express">Express</NativeSelectOption>
              <NativeSelectOption value="freight">Freight</NativeSelectOption>
            </NativeSelect>
          </FieldControl>
          <FieldMessage id={`shipping-${validation}-msg`}>{message}</FieldMessage>
        </Field>
      ))}
    </div>
  )
}
