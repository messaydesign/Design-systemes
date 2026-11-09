import { Field, FieldControl, FieldLabel, FieldMessage } from "@/registry/main/ui/field"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/registry/main/ui/select"

export default function SelectValidation() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <Field validation="error">
        <FieldLabel htmlFor="plan" requirement="Required">Plan</FieldLabel>
        <FieldControl>
          <Select>
            <SelectTrigger id="plan" aria-invalid aria-describedby="plan-msg">
              <SelectValue placeholder="Choose a plan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="free">Free</SelectItem>
              <SelectItem value="team">Team</SelectItem>
            </SelectContent>
          </Select>
        </FieldControl>
        <FieldMessage id="plan-msg">Choose a plan to continue.</FieldMessage>
      </Field>
      <Field>
        <FieldLabel htmlFor="region">Region</FieldLabel>
        <FieldControl>
          <Select disabled defaultValue="eu">
            <SelectTrigger id="region">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="eu">Europe</SelectItem>
            </SelectContent>
          </Select>
        </FieldControl>
        <FieldMessage>Set by your organisation.</FieldMessage>
      </Field>
    </div>
  )
}
