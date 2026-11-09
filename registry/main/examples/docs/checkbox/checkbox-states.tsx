import { Checkbox } from "@/registry/main/ui/checkbox"
import { Label } from "@/registry/main/ui/label"

const states = [
  { id: "cb-unchecked", label: "Unchecked", props: {} },
  { id: "cb-checked", label: "Checked", props: { defaultChecked: true } },
  { id: "cb-indeterminate", label: "Indeterminate", props: { checked: "indeterminate" as const } },
  { id: "cb-disabled", label: "Disabled", props: { disabled: true } },
  { id: "cb-disabled-checked", label: "Disabled checked", props: { disabled: true, defaultChecked: true } },
]

export default function CheckboxStates() {
  return (
    <div className="grid gap-1 sm:grid-cols-2">
      {states.map(({ id, label, props }) => (
        <div key={id} className="flex items-center gap-1">
          <Checkbox id={id} {...props} />
          <Label htmlFor={id}>{label}</Label>
        </div>
      ))}
    </div>
  )
}
