"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/main/ui/button"
import { ArrowRightIcon, PlusIcon } from "@/registry/main/ui/icons"

const variants = ["default", "secondary", "outline", "ghost", "destructive", "link"] as const
const sizes = [
  ["xs", "icon-xs", "XS 32"],
  ["sm", "icon-sm", "Small 40"],
  ["default", "icon", "Large 48"],
  ["lg", "icon-lg", "XL 56"],
  ["xl", "icon-xl", "XXL 64"],
] as const
const corners = ["default", "soft", "pill"] as const

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      {children}
    </section>
  )
}

function Label({ children }: { children: React.ReactNode }) {
  return <span className="w-28 shrink-0 text-sm text-muted-foreground">{children}</span>
}

function VariantMatrix() {
  return (
    <div className="flex flex-col gap-4 overflow-x-auto">
      {variants.map((variant) => (
        <div key={variant} className="flex items-center gap-6">
          <Label>{variant === "default" ? "primary" : variant}</Label>
          <Button variant={variant}>
            <PlusIcon />
            Continue
            <ArrowRightIcon />
          </Button>
          <Button variant={variant} selected>
            <PlusIcon />
            Continue
            <ArrowRightIcon />
          </Button>
          <Button variant={variant} disabled>
            <PlusIcon />
            Continue
            <ArrowRightIcon />
          </Button>
        </div>
      ))}
    </div>
  )
}

function LoadingDemo() {
  const [loading, setLoading] = React.useState<string | null>(null)
  const [clicks, setClicks] = React.useState(0)

  function run(id: string) {
    setClicks((c) => c + 1)
    setLoading(id)
    window.setTimeout(() => setLoading(null), 2000)
  }

  return (
    <div className="flex flex-wrap items-center gap-6">
      <Button loading={loading === "a"} onClick={() => run("a")}>
        <PlusIcon />
        Continue
        <ArrowRightIcon />
      </Button>
      <Button variant="secondary" loading={loading === "b"} loadingText="Saving…" onClick={() => run("b")}>
        Save changes
      </Button>
      <Button size="icon" aria-label="Add item" loading={loading === "c"} onClick={() => run("c")}>
        <PlusIcon />
      </Button>
      <span className="text-sm text-muted-foreground">
        Click to load for 2s · activations: {clicks}
      </span>
    </div>
  )
}

export function ButtonShowcase() {
  const [dark, setDark] = React.useState(false)

  return (
    <div className="flex flex-col gap-12">
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground">Preview theme</span>
        <Button size="sm" variant="secondary" selected={!dark} onClick={() => setDark(false)}>
          Light
        </Button>
        <Button size="sm" variant="secondary" selected={dark} onClick={() => setDark(true)}>
          Dark
        </Button>
      </div>

      <div className={cn("flex flex-col gap-12 rounded-2xl border bg-background p-6 text-foreground sm:p-8", dark && "dark")}>
        <Section title="Variants · Default / Selected / Disabled">
          <p className="text-sm text-muted-foreground">Hover and press any button to see Hover and Pressed.</p>
          <VariantMatrix />
        </Section>

        <Section title="Sizes">
          <div className="flex flex-col gap-4">
            {sizes.map(([size, iconSize, label]) => (
              <div key={size} className="flex items-center gap-6">
                <Label>{label}</Label>
                <Button size={size}>
                  <PlusIcon />
                  Continue
                  <ArrowRightIcon />
                </Button>
                <Button size={iconSize} aria-label="Add">
                  <PlusIcon />
                </Button>
                <Button size={iconSize} corner="pill" variant="secondary" aria-label="Add">
                  <PlusIcon />
                </Button>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Corner style">
          <div className="flex flex-wrap items-center gap-6">
            {corners.map((corner) => (
              <Button key={corner} corner={corner}>
                <PlusIcon />
                Continue
                <ArrowRightIcon />
              </Button>
            ))}
          </div>
        </Section>

        <Section title="Loading">
          <LoadingDemo />
        </Section>

        <Section title="As link · RTL">
          <div className="flex flex-wrap items-center gap-6">
            <Button asChild variant="outline">
              <a href="#top" aria-current="page">
                Current page
                <ArrowRightIcon />
              </a>
            </Button>
            <div dir="rtl" className="flex items-center gap-6">
              <Button>
                <PlusIcon />
                متابعة
                <ArrowRightIcon />
              </Button>
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}
