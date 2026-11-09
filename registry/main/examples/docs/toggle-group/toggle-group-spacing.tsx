import { ToggleGroup, ToggleGroupItem } from "@/registry/main/ui/toggle-group"

export default function ToggleGroupSpacing() {
  return (
    <div className="flex flex-col items-center gap-6">
      {(["default", "soft", "pill"] as const).map((corner) => (
        <ToggleGroup
          key={corner}
          type="single"
          spacing={0}
          corner={corner}
          defaultValue="week"
          aria-label={`Calendar view, ${corner} corners`}
        >
          <ToggleGroupItem value="day">Day</ToggleGroupItem>
          <ToggleGroupItem value="week">Week</ToggleGroupItem>
          <ToggleGroupItem value="month">Month</ToggleGroupItem>
        </ToggleGroup>
      ))}
    </div>
  )
}
