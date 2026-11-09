import { OverlaysShowcase } from "@/registry/main/examples/overlays-showcase"

export default function OverlaysPage() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-12 sm:px-8">
      <header className="flex flex-col gap-2">
        <p className="text-sm text-muted-foreground">Main Brand UI · Phase 3</p>
        <h1 className="text-4xl font-bold tracking-tight">Overlays and menus</h1>
        <p className="max-w-2xl text-muted-foreground">
          Dialog, Alert Dialog, Sheet, Popover, Tooltip, Hover Card, Dropdown Menu and Context Menu —
          built from the Figma “05 · Overlays and menus” page.
        </p>
      </header>
      <OverlaysShowcase />
    </main>
  )
}
