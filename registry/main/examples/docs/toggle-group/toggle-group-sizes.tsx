import { ToggleGroup, ToggleGroupItem } from "@/registry/main/ui/toggle-group"

export default function ToggleGroupSizes() {
  return (
    <div className="flex flex-col items-center gap-6">
      {(["sm", "default", "lg"] as const).map((size) => (
        <ToggleGroup key={size} type="single" size={size} defaultValue="1x" aria-label={`Playback speed, ${size}`}>
          <ToggleGroupItem value="0.5x">0.5×</ToggleGroupItem>
          <ToggleGroupItem value="1x">1×</ToggleGroupItem>
          <ToggleGroupItem value="2x">2×</ToggleGroupItem>
        </ToggleGroup>
      ))}
    </div>
  )
}
