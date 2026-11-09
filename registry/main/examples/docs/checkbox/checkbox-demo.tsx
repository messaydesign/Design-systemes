import { Checkbox } from "@/registry/main/ui/checkbox"
import { Label } from "@/registry/main/ui/label"

export default function CheckboxDemo() {
  return (
    <div className="flex items-center gap-1">
      <Checkbox id="terms-demo" />
      <Label htmlFor="terms-demo">Accept terms and conditions</Label>
    </div>
  )
}
