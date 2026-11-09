import { Field, FieldControl, FieldLabel, FieldMessage } from "@/registry/main/ui/field"
import { NativeSelect, NativeSelectOption } from "@/registry/main/ui/native-select"

export default function NativeSelectField() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="country" requirement="Required">
        Country
      </FieldLabel>
      <FieldControl>
        <NativeSelect id="country" autoComplete="country" required defaultValue="DE" aria-describedby="country-help">
          <NativeSelectOption value="AT">Austria</NativeSelectOption>
          <NativeSelectOption value="DE">Germany</NativeSelectOption>
          <NativeSelectOption value="CH">Switzerland</NativeSelectOption>
        </NativeSelect>
      </FieldControl>
      <FieldMessage id="country-help">Used to calculate tax and shipping.</FieldMessage>
    </Field>
  )
}
