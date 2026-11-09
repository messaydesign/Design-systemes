import type { Metadata } from "next"
import { NavigationShowcase } from "@/registry/main/examples/navigation-showcase"

export const metadata: Metadata = { title: "Navigation playground" }

export default function NavigationPage() {
  return (
    <div className="flex flex-col gap-12">
      <header className="flex flex-col gap-2">
        <p className="text-sm text-[var(--text-secondary)]">Playground · all states</p>
        <h1 className="font-heading text-4xl font-bold tracking-tight">Navigation</h1>
        <p className="max-w-2xl text-[var(--text-secondary)]">
          Tabs, Navigation Item, Breadcrumb, Pagination, Menubar, Navigation Menu and Sidebar — from Figma
          page “04 · Navigation”.
        </p>
      </header>
      <NavigationShowcase />
    </div>
  )
}
