import { ButtonShowcase } from "@/registry/main/examples/button-showcase"

export default function Home() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-12 sm:px-8">
      <header className="flex flex-col gap-2">
        <p className="text-sm text-muted-foreground">Main Brand UI · Phase 1</p>
        <h1 className="text-4xl font-bold tracking-tight">Button</h1>
        <p className="max-w-2xl text-muted-foreground">
          Built from Figma “Button / Adaptive” — six variants, five states,
          five sizes, three corner styles, loading and focus. Install with{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
            npx shadcn@latest add http://localhost:3000/r/button.json
          </code>
        </p>
      </header>
      <ButtonShowcase />
    </main>
  )
}
