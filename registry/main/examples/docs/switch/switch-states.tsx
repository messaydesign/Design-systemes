import { Label } from "@/registry/main/ui/label"
import { Switch } from "@/registry/main/ui/switch"

const states = [
  { id: "sw-off", label: "Off", props: {} },
  { id: "sw-on", label: "On", props: { defaultChecked: true } },
  { id: "sw-disabled-off", label: "Disabled off", props: { disabled: true } },
  { id: "sw-disabled-on", label: "Disabled on", props: { disabled: true, defaultChecked: true } },
]

export default function SwitchStates() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {states.map(({ id, label, props }) => (
        <div key={id} className="flex items-center gap-2">
          <Switch id={id} {...props} />
          <Label htmlFor={id}>{label}</Label>
        </div>
      ))}
    </div>
  )
}
