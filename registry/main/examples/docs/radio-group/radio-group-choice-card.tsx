import { Field, FieldContent, FieldDescription, FieldLabel, FieldTitle } from "@/registry/main/ui/field"
import { RadioGroup, RadioGroupItem } from "@/registry/main/ui/radio-group"

const options = [
  { value: "standard", title: "Standard", description: "3–5 working days · Free" },
  { value: "express", title: "Express", description: "Next working day · €9.90" },
]

export default function RadioGroupChoiceCard() {
  return (
    <RadioGroup defaultValue="standard" aria-label="Delivery" className="w-full max-w-sm">
      {options.map((option) => (
        <FieldLabel key={option.value} htmlFor={`delivery-${option.value}`}>
          <Field orientation="horizontal" className="items-center gap-1">
            <FieldContent className="gap-0">
              <FieldTitle>{option.title}</FieldTitle>
              <FieldDescription>{option.description}</FieldDescription>
            </FieldContent>
            <RadioGroupItem value={option.value} id={`delivery-${option.value}`} />
          </Field>
        </FieldLabel>
      ))}
    </RadioGroup>
  )
}
