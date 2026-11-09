import { FieldDescription, FieldLabel, FieldLegend, FieldSet } from "@/registry/main/ui/field"
import { RadioGroup, RadioGroupItem } from "@/registry/main/ui/radio-group"

const plans = [
  { value: "monthly", label: "Monthly", hint: "€12 per month, cancel any time." },
  { value: "yearly", label: "Yearly", hint: "€120 per year — two months free." },
]

export default function RadioGroupFieldset() {
  return (
    <FieldSet className="max-w-sm">
      <FieldLegend variant="label">Billing period</FieldLegend>
      <FieldDescription id="billing-help">You can switch plans later from Settings.</FieldDescription>
      <RadioGroup name="billing" defaultValue="yearly" aria-describedby="billing-help" className="gap-y-2">
        {plans.map((plan) => (
          <div key={plan.value} className="flex items-start gap-1">
            <RadioGroupItem value={plan.value} id={`billing-${plan.value}`} aria-describedby={`billing-${plan.value}-hint`} />
            <div className="flex flex-col pt-1">
              <FieldLabel htmlFor={`billing-${plan.value}`}>{plan.label}</FieldLabel>
              <p id={`billing-${plan.value}-hint`} className="text-sm text-muted-foreground">
                {plan.hint}
              </p>
            </div>
          </div>
        ))}
      </RadioGroup>
    </FieldSet>
  )
}
