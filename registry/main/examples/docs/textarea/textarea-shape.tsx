import { Textarea } from "@/registry/main/ui/textarea"

export default function TextareaShape() {
  return (
    <div className="grid w-full max-w-md gap-4">
      <Textarea aria-label="8px corners" placeholder="Shape 8px (default)" />
      <Textarea aria-label="Rounded" shape="rounded" placeholder="Shape Rounded (24px)" />
    </div>
  )
}
