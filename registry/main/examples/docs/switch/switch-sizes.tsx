import { Label } from "@/registry/main/ui/label"
import { Switch } from "@/registry/main/ui/switch"

export default function SwitchSizes() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Switch id="switch-size-default" defaultChecked />
        <Label htmlFor="switch-size-default">Default (48×32)</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="switch-size-sm" size="sm" defaultChecked />
        <Label htmlFor="switch-size-sm">Small (36×24)</Label>
      </div>
    </div>
  )
}
