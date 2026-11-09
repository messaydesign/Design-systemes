import { Field, FieldControl, FieldLabel } from "@/registry/main/ui/field"
import { SearchIcon } from "@/registry/main/ui/icons"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/registry/main/ui/input-group"

export default function InputGroupDisabled() {
  return (
    <Field disabled className="max-w-sm">
      <FieldLabel htmlFor="search-disabled">Search archive</FieldLabel>
      <FieldControl>
        <InputGroup>
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupInput id="search-disabled" type="search" disabled placeholder="Archive is being indexed" />
        </InputGroup>
      </FieldControl>
    </Field>
  )
}
