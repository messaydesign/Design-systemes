import type { Metadata } from "next"
import { ActionsShowcase } from "@/registry/main/examples/actions-showcase"

export const metadata: Metadata = { title: "Actions playground" }

export default function ActionsPage() {
  return (
    <div className="flex flex-col gap-12">
      <header className="flex flex-col gap-2">
        <p className="text-sm text-muted-foreground">Playground · all states</p>
        <h1 className="font-heading text-4xl font-bold tracking-tight">Actions</h1>
        <p className="max-w-2xl text-muted-foreground">
          Button Group, Split Button, Toggle and Toggle Group — from Figma page “02 · Actions”.
        </p>
      </header>
      <ActionsShowcase />
    </div>
  )
}
