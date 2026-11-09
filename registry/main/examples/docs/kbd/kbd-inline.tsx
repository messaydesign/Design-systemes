import { Kbd, KbdGroup } from "@/registry/main/ui/kbd"

export default function KbdInline() {
  return (
    <p className="max-w-sm text-sm text-muted-foreground">
      Press{" "}
      <KbdGroup>
        <Kbd>
          <abbr title="Command" className="no-underline">⌘</abbr>
        </Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>{" "}
      to open search, or <Kbd>Esc</Kbd> to close it.
    </p>
  )
}
