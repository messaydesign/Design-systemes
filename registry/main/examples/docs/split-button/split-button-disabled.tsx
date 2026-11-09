import { SplitButton, SplitButtonAction, SplitButtonTrigger } from "@/registry/main/ui/split-button"

export default function SplitButtonDisabled() {
  return (
    <SplitButton disabled aria-label="Merge options">
      <SplitButtonAction>Merge</SplitButtonAction>
      <SplitButtonTrigger aria-label="More merge options" />
    </SplitButton>
  )
}
