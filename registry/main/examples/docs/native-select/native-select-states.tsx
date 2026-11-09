import { Field, FieldLabel } from "@/registry/main/ui/field"
import { NativeSelect, NativeSelectOption } from "@/registry/main/ui/native-select"

export default function NativeSelectStates() {
  return (
    <div className="grid w-full max-w-xs gap-6">
      <Field>
        <FieldLabel htmlFor="ns-role">Role</FieldLabel>
        <NativeSelect id="ns-role" defaultValue="editor">
          <NativeSelectOption value="viewer">Viewer</NativeSelectOption>
          <NativeSelectOption value="editor">Editor</NativeSelectOption>
          <NativeSelectOption value="admin" disabled>
            Admin (owner only)
          </NativeSelectOption>
        </NativeSelect>
      </Field>
      <Field disabled>
        <FieldLabel htmlFor="ns-plan">Plan</FieldLabel>
        <NativeSelect id="ns-plan" disabled defaultValue="team">
          <NativeSelectOption value="team">Team</NativeSelectOption>
        </NativeSelect>
      </Field>
    </div>
  )
}
