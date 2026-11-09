import { Input } from "@/registry/main/ui/input"
import { Label } from "@/registry/main/ui/label"

export default function LabelDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Label htmlFor="label-demo-email">Email</Label>
      <Input id="label-demo-email" type="email" autoComplete="email" placeholder="name@example.com" />
    </div>
  )
}
