import { ToggleGroup, ToggleGroupItem } from "@/registry/main/ui/toggle-group"

export default function ToggleGroupVariants() {
  return (
    <div className="flex flex-col items-center gap-6">
      <ToggleGroup type="single" defaultValue="list" aria-label="Layout, outline">
        <ToggleGroupItem value="list">List</ToggleGroupItem>
        <ToggleGroupItem value="board">Board</ToggleGroupItem>
        <ToggleGroupItem value="calendar">Calendar</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" variant="default" defaultValue="list" aria-label="Layout, default">
        <ToggleGroupItem value="list">List</ToggleGroupItem>
        <ToggleGroupItem value="board">Board</ToggleGroupItem>
        <ToggleGroupItem value="calendar">Calendar</ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
