import { NativeSelect, NativeSelectOption } from "@/registry/main/ui/native-select"

export default function NativeSelectShape() {
  return (
    <div className="grid w-full max-w-xs gap-4">
      <NativeSelect aria-label="Sort by (8px corners)" defaultValue="newest">
        <NativeSelectOption value="newest">Shape 8px (default)</NativeSelectOption>
        <NativeSelectOption value="oldest">Oldest first</NativeSelectOption>
      </NativeSelect>
      <NativeSelect aria-label="Sort by (rounded)" shape="rounded" defaultValue="newest">
        <NativeSelectOption value="newest">Shape Rounded</NativeSelectOption>
        <NativeSelectOption value="oldest">Oldest first</NativeSelectOption>
      </NativeSelect>
    </div>
  )
}
