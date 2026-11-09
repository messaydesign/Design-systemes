import { Label } from "@/registry/main/ui/label"
import { RadioGroup, RadioGroupItem } from "@/registry/main/ui/radio-group"

export default function RadioGroupDisabled() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <RadioGroup defaultValue="eu" aria-label="Data region" className="gap-y-0">
        {[
          { value: "eu", label: "Europe" },
          { value: "us", label: "United States" },
          { value: "apac", label: "Asia Pacific (coming soon)", disabled: true },
        ].map((option) => (
          <div key={option.value} className="flex items-center gap-1">
            <RadioGroupItem value={option.value} id={`region-${option.value}`} disabled={option.disabled} />
            <Label htmlFor={`region-${option.value}`}>{option.label}</Label>
          </div>
        ))}
      </RadioGroup>
      <RadioGroup defaultValue="on" disabled aria-label="Two-step verification (managed by your admin)" className="gap-y-0">
        {["On", "Off"].map((option) => (
          <div key={option} className="flex items-center gap-1">
            <RadioGroupItem value={option.toLowerCase()} id={`mfa-${option.toLowerCase()}`} />
            <Label htmlFor={`mfa-${option.toLowerCase()}`}>{option}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}
