import { Field, FieldLabel } from "@/registry/main/ui/field"
import { NativeSelect, NativeSelectOptGroup, NativeSelectOption } from "@/registry/main/ui/native-select"

export default function NativeSelectGroups() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="timezone">Time zone</FieldLabel>
      <NativeSelect id="timezone" defaultValue="Europe/Berlin">
        <NativeSelectOptGroup label="Europe">
          <NativeSelectOption value="Europe/London">London</NativeSelectOption>
          <NativeSelectOption value="Europe/Berlin">Berlin</NativeSelectOption>
          <NativeSelectOption value="Europe/Athens">Athens</NativeSelectOption>
        </NativeSelectOptGroup>
        <NativeSelectOptGroup label="Americas">
          <NativeSelectOption value="America/New_York">New York</NativeSelectOption>
          <NativeSelectOption value="America/Los_Angeles">Los Angeles</NativeSelectOption>
        </NativeSelectOptGroup>
      </NativeSelect>
    </Field>
  )
}
