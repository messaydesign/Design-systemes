import { ToggleGroup, ToggleGroupItem } from "@/registry/main/ui/toggle-group"

export default function ToggleGroupDisabled() {
  return (
    <div className="flex flex-col items-center gap-6">
      <ToggleGroup type="single" defaultValue="standard" aria-label="Shipping speed">
        <ToggleGroupItem value="standard">Standard</ToggleGroupItem>
        <ToggleGroupItem value="express">Express</ToggleGroupItem>
        <ToggleGroupItem value="same-day" disabled>
          Same day
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" disabled defaultValue="standard" aria-label="Shipping speed, unavailable">
        <ToggleGroupItem value="standard">Standard</ToggleGroupItem>
        <ToggleGroupItem value="express">Express</ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
