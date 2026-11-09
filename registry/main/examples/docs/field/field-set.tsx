import {
  Field,
  FieldControl,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/main/ui/field"
import { Input } from "@/registry/main/ui/input"

export default function FieldSetExample() {
  return (
    <FieldSet className="w-full">
      <FieldLegend>Shipping address</FieldLegend>
      <FieldDescription>Where should we send your order?</FieldDescription>
      <FieldGroup orientation="horizontal">
        <Field>
          <FieldLabel htmlFor="city">City</FieldLabel>
          <FieldControl>
            <Input id="city" autoComplete="address-level2" />
          </FieldControl>
        </Field>
        <Field>
          <FieldLabel htmlFor="postcode">Postcode</FieldLabel>
          <FieldControl>
            <Input id="postcode" autoComplete="postal-code" />
          </FieldControl>
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}
