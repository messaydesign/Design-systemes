import { ToggleGroup, ToggleGroupItem } from "@/registry/main/ui/toggle-group"

export default function ToggleGroupVertical() {
  return (
    <div className="flex items-start gap-6">
      <ToggleGroup type="single" orientation="vertical" defaultValue="newest" aria-label="Sort by">
        <ToggleGroupItem value="newest">Newest</ToggleGroupItem>
        <ToggleGroupItem value="oldest">Oldest</ToggleGroupItem>
        <ToggleGroupItem value="popular">Popular</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" orientation="vertical" spacing={0} defaultValue="newest" aria-label="Sort by, connected">
        <ToggleGroupItem value="newest">Newest</ToggleGroupItem>
        <ToggleGroupItem value="oldest">Oldest</ToggleGroupItem>
        <ToggleGroupItem value="popular">Popular</ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
