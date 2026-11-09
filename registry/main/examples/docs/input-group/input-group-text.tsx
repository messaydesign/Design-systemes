import { Field, FieldControl, FieldLabel, FieldMessage } from "@/registry/main/ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@/registry/main/ui/input-group"

export default function InputGroupTextAddons() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <Field>
        <FieldLabel htmlFor="site-url">Website</FieldLabel>
        <FieldControl>
          <InputGroup>
            <InputGroupAddon>
              <InputGroupText className="text-muted-foreground">https://</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput id="site-url" placeholder="example" aria-describedby="site-url-help" />
            <InputGroupAddon align="inline-end">
              <InputGroupText className="text-muted-foreground">.com</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </FieldControl>
        <FieldMessage id="site-url-help">Prefix and suffix are visual only; the value is “example”.</FieldMessage>
      </Field>
      <Field>
        <FieldLabel htmlFor="price">Price</FieldLabel>
        <FieldControl>
          <InputGroup>
            <InputGroupAddon>
              <InputGroupText>€</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput id="price" inputMode="decimal" placeholder="0.00" />
            <InputGroupAddon align="inline-end">
              <InputGroupText className="text-muted-foreground">EUR</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </FieldControl>
      </Field>
    </div>
  )
}
