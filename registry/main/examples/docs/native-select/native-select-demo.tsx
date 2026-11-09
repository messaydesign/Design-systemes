import { NativeSelect, NativeSelectOption } from "@/registry/main/ui/native-select"

export default function NativeSelectDemo() {
  return (
    <div className="w-full max-w-xs">
      <NativeSelect aria-label="Status" defaultValue="">
        <NativeSelectOption value="" disabled>
          Select status
        </NativeSelectOption>
        <NativeSelectOption value="todo">To do</NativeSelectOption>
        <NativeSelectOption value="in-progress">In progress</NativeSelectOption>
        <NativeSelectOption value="done">Done</NativeSelectOption>
      </NativeSelect>
    </div>
  )
}
