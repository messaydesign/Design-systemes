import { Label } from "@/registry/main/ui/label"
import { RadioGroup, RadioGroupItem } from "@/registry/main/ui/radio-group"

export default function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable" aria-label="Row density" className="gap-y-0">
      {["Default", "Comfortable", "Compact"].map((option) => (
        <div key={option} className="flex items-center gap-1">
          <RadioGroupItem value={option.toLowerCase()} id={`density-${option.toLowerCase()}`} />
          <Label htmlFor={`density-${option.toLowerCase()}`}>{option}</Label>
        </div>
      ))}
    </RadioGroup>
  )
}
