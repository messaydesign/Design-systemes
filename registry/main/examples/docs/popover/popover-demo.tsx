import { Button } from "@/registry/main/ui/button"
import { Field, FieldControl, FieldLabel } from "@/registry/main/ui/field"
import { Input } from "@/registry/main/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/main/ui/popover"

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Dimensions</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" aria-labelledby="popover-dimensions-title">
        <PopoverHeader>
          <PopoverTitle id="popover-dimensions-title">Dimensions</PopoverTitle>
          <PopoverDescription>Set the size of the selected layer.</PopoverDescription>
        </PopoverHeader>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="popover-width">Width</FieldLabel>
            <FieldControl>
              <Input id="popover-width" defaultValue="320px" />
            </FieldControl>
          </Field>
          <Field>
            <FieldLabel htmlFor="popover-height">Height</FieldLabel>
            <FieldControl>
              <Input id="popover-height" defaultValue="240px" />
            </FieldControl>
          </Field>
        </div>
      </PopoverContent>
    </Popover>
  )
}
