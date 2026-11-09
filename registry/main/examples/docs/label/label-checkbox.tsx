import { Checkbox } from "@/registry/main/ui/checkbox"
import { Label } from "@/registry/main/ui/label"

export default function LabelCheckbox() {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1">
        <Checkbox id="label-remember" defaultChecked />
        <Label htmlFor="label-remember">Remember me</Label>
      </div>
      <div className="flex items-center gap-1">
        {/* The label follows the control, so peer-disabled greys it out. */}
        <Checkbox id="label-sync" disabled />
        <Label htmlFor="label-sync">Sync across devices (unavailable)</Label>
      </div>
    </div>
  )
}
