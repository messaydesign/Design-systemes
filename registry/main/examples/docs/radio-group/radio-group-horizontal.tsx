import { Label } from "@/registry/main/ui/label"
import { RadioGroup, RadioGroupItem } from "@/registry/main/ui/radio-group"

export default function RadioGroupHorizontal() {
  return (
    <RadioGroup orientation="horizontal" defaultValue="card" aria-label="Payment method">
      {[
        { value: "card", label: "Card" },
        { value: "paypal", label: "PayPal" },
        { value: "invoice", label: "Invoice" },
      ].map((option) => (
        <div key={option.value} className="flex items-center gap-1">
          <RadioGroupItem value={option.value} id={`pay-${option.value}`} />
          <Label htmlFor={`pay-${option.value}`}>{option.label}</Label>
        </div>
      ))}
    </RadioGroup>
  )
}
