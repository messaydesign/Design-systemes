import { SearchIcon } from "@/registry/main/ui/icons"
import { Toggle } from "@/registry/main/ui/toggle"

export default function ToggleCorners() {
  return (
    <>
      {(["default", "soft", "pill"] as const).map((corner) => (
        <Toggle key={corner} variant="outline" corner={corner} defaultPressed aria-label={`Search filters, ${corner} corners`}>
          <SearchIcon />
        </Toggle>
      ))}
    </>
  )
}
