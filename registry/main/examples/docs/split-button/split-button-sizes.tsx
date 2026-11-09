import { SplitButton, SplitButtonAction, SplitButtonTrigger } from "@/registry/main/ui/split-button"

const sizes = [
  { action: "sm", trigger: "icon-sm" },
  { action: "default", trigger: "icon" },
  { action: "lg", trigger: "icon-lg" },
] as const

export default function SplitButtonSizes() {
  return (
    <div className="flex flex-col items-center gap-6">
      {sizes.map(({ action, trigger }) => (
        <SplitButton key={action} aria-label={`Save, ${action}`}>
          <SplitButtonAction size={action}>Save</SplitButtonAction>
          <SplitButtonTrigger size={trigger} aria-label="More save options" />
        </SplitButton>
      ))}
    </div>
  )
}
