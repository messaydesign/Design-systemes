import { Label } from "@/registry/main/ui/label"
import { Switch } from "@/registry/main/ui/switch"

export default function SwitchDemo() {
  return (
    <div className="flex items-center gap-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane mode</Label>
    </div>
  )
}
