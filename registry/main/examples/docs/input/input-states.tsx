import { Input } from "@/registry/main/ui/input"

export default function InputStates() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <Input aria-label="Default" placeholder="Default" />
      <Input aria-label="Read only" defaultValue="Read only value" readOnly />
      <Input aria-label="Disabled" placeholder="Disabled" disabled />
    </div>
  )
}
