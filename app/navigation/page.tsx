import { NavigationShowcase } from "@/registry/main/examples/navigation-showcase"

export default function NavigationPage() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-12 sm:px-8">
      <header className="flex flex-col gap-2">
        <p className="text-sm text-muted-foreground">Main Brand UI · Phase 5</p>
        <h1 className="text-4xl font-bold tracking-tight">Navigation</h1>
        <p className="max-w-2xl text-muted-foreground">
          Tabs, Navigation Item, Breadcrumb, Pagination, Menubar, Navigation Menu and Sidebar — from Figma
          page “04 · Navigation”.
        </p>
      </header>
      <NavigationShowcase />
    </main>
  )
}
