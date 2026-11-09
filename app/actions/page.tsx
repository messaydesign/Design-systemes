import { ActionsShowcase } from "@/registry/main/examples/actions-showcase"

export default function ActionsPage() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-12 sm:px-8">
      <header className="flex flex-col gap-2">
        <p className="text-sm text-muted-foreground">Main Brand UI · Phase 6</p>
        <h1 className="text-4xl font-bold tracking-tight">Actions</h1>
        <p className="max-w-2xl text-muted-foreground">
          Button Group, Split Button, Toggle and Toggle Group — from Figma page “02 · Actions”.
        </p>
      </header>
      <ActionsShowcase />
    </main>
  )
}
