import * as React from "react"

/** Framed canvas used by the playground pages. Theme comes from the site toggle. */
export function PreviewFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-12 rounded-2xl border border-[var(--border-subtle)] bg-background p-6 text-foreground sm:p-8">
      {children}
    </div>
  )
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-heading text-xl font-semibold">{title}</h2>
      {children}
    </section>
  )
}
