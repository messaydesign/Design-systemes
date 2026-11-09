import { Field, FieldControl, FieldLabel, FieldMessage } from "@/registry/main/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/registry/main/ui/select"

export default function SelectWithField() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="timezone">Time zone</FieldLabel>
      <FieldControl>
        <Select defaultValue="europe-london" name="timezone">
          <SelectTrigger id="timezone" aria-describedby="timezone-help">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Europe</SelectLabel>
              <SelectItem value="europe-london" showCheck>London</SelectItem>
              <SelectItem value="europe-berlin" showCheck>Berlin</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Africa</SelectLabel>
              <SelectItem value="africa-addis" showCheck>Addis Ababa</SelectItem>
              <SelectItem value="africa-lagos" showCheck disabled>Lagos (unavailable)</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </FieldControl>
      <FieldMessage id="timezone-help">Used for reminders and reports.</FieldMessage>
    </Field>
  )
}
