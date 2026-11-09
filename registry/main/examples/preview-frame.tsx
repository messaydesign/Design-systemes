"use client"

import * as React from "react"

import { Button } from "@/registry/main/ui/button"

/** Light/Dark switch + framed canvas used by the preview pages. */
export function PreviewFrame({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = React.useState(false)
  // Toggle on <html>, like a real app, so portalled menus follow the theme.
  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
    return () => document.documentElement.classList.remove("dark")
  }, [dark])
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground">Preview theme</span>
        <Button size="sm" variant="secondary" selected={!dark} onClick={() => setDark(false)}>
          Light
        </Button>
        <Button size="sm" variant="secondary" selected={dark} onClick={() => setDark(true)}>
          Dark
        </Button>
      </div>
      <div className="flex flex-col gap-12 rounded-2xl border bg-background p-6 text-foreground sm:p-8">
        {children}
      </div>
    </div>
  )
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      {children}
    </section>
  )
}
