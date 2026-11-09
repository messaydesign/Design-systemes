import type { Metadata } from "next"
import { OverlaysShowcase } from "@/registry/main/examples/overlays-showcase"

export const metadata: Metadata = { title: "Overlays and menus playground" }

export default function OverlaysPage() {
  return (
    <div className="flex flex-col gap-12">
      <header className="flex flex-col gap-2">
        <p className="text-sm text-[var(--text-secondary)]">Playground · all states</p>
        <h1 className="font-heading text-4xl font-bold tracking-tight">Overlays and menus</h1>
        <p className="max-w-2xl text-[var(--text-secondary)]">
          Dialog, Alert Dialog, Sheet, Popover, Tooltip, Hover Card, Dropdown Menu and Context Menu —
          built from the Figma “05 · Overlays and menus” page.
        </p>
      </header>
      <OverlaysShowcase />
    </div>
  )
}
