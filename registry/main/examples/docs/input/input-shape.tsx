import { Input } from "@/registry/main/ui/input"

export default function InputShape() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <Input aria-label="8px corners" placeholder="Shape 8px (default)" />
      <Input aria-label="Rounded" shape="rounded" placeholder="Shape Rounded" />
    </div>
  )
}
