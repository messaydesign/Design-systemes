import { InfoIcon } from "@/registry/main/ui/icons"
import { Toggle } from "@/registry/main/ui/toggle"

export default function ToggleSizes() {
  return (
    <>
      <Toggle size="sm" variant="outline" aria-label="Show details">
        <InfoIcon />
      </Toggle>
      <Toggle variant="outline" aria-label="Show details">
        <InfoIcon />
      </Toggle>
      <Toggle size="lg" variant="outline" aria-label="Show details">
        <InfoIcon />
      </Toggle>
    </>
  )
}
