import { ToggleGroup, ToggleGroupItem } from "@/registry/main/ui/toggle-group"

export default function ToggleGroupDemo() {
  return (
    <ToggleGroup type="single" defaultValue="week" aria-label="Calendar view">
      <ToggleGroupItem value="day">Day</ToggleGroupItem>
      <ToggleGroupItem value="week">Week</ToggleGroupItem>
      <ToggleGroupItem value="month">Month</ToggleGroupItem>
    </ToggleGroup>
  )
}
