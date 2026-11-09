import { SplitButton, SplitButtonAction, SplitButtonTrigger } from "@/registry/main/ui/split-button"

const corners = ["default", "soft", "pill"] as const

export default function SplitButtonCorners() {
  return (
    <div className="flex flex-col items-center gap-6">
      {corners.map((corner) => (
        <SplitButton key={corner} corner={corner} aria-label={`Send, ${corner} corners`}>
          <SplitButtonAction>Send</SplitButtonAction>
          <SplitButtonTrigger aria-label="More send options" />
        </SplitButton>
      ))}
    </div>
  )
}
