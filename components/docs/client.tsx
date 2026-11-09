"use client"

import * as React from "react"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/main/ui/button"
import { CheckIcon } from "@/registry/main/ui/icons"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/main/ui/tabs"

/* ---------- Copy ---------- */

export function CopyButton({ value, className, label = "Copy code" }: { value: string; className?: string; label?: string }) {
  const [copied, setCopied] = React.useState(false)
  React.useEffect(() => {
    if (!copied) return
    const t = window.setTimeout(() => setCopied(false), 2000)
    return () => window.clearTimeout(t)
  }, [copied])
  return (
    <Button
      size="xs"
      variant="secondary"
      className={className}
      aria-label={copied ? "Copied" : label}
      onClick={() => {
        void navigator.clipboard.writeText(value)
        setCopied(true)
      }}
    >
      {copied ? <CheckIcon /> : null}
      {copied ? "Copied" : "Copy"}
    </Button>
  )
}

/* ---------- Theme (site-wide, stored per viewer) ---------- */

function subscribeTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
  return () => observer.disconnect()
}

function readTheme(): "light" | "dark" {
  return document.documentElement.classList.contains("dark") ? "dark" : "light"
}

export function useTheme() {
  const theme = React.useSyncExternalStore(subscribeTheme, readTheme, () => "light" as const)
  const setTheme = React.useCallback((next: "light" | "dark") => {
    document.documentElement.classList.toggle("dark", next === "dark")
    try {
      localStorage.setItem("theme", next)
    } catch {}
  }, [])
  return { theme, setTheme }
}

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  return (
    <Button
      size="sm"
      variant="ghost"
      className={className}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "Light" : "Dark"}
    </Button>
  )
}

/* ---------- Preview / Code ---------- */

export function PreviewShell({
  children,
  codeHtml,
  code,
  align = "center",
  minHeight = 200,
}: {
  children: React.ReactNode
  codeHtml: string
  code: string
  align?: "center" | "start"
  minHeight?: number
}) {
  const { theme, setTheme } = useTheme()
  const [rtl, setRtl] = React.useState(false)
  return (
    <Tabs defaultValue="preview" className="gap-0">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <TabsList variant="line" aria-label="Preview or code">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <div className="flex items-center gap-1">
          <Button size="xs" variant="ghost" selected={rtl} onClick={() => setRtl((v) => !v)}>
            RTL
          </Button>
          <Button size="xs" variant="ghost" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? "Light" : "Dark"}
          </Button>
        </div>
      </div>
      <TabsContent value="preview" className="mt-2">
        <div
          dir={rtl ? "rtl" : "ltr"}
          data-slot="docs-preview"
          style={{ minHeight }}
          className={cn(
            "flex w-full flex-wrap gap-4 overflow-x-auto rounded-lg border border-border bg-background p-6 sm:p-10",
            align === "center" ? "items-center justify-center" : "items-start justify-start"
          )}
        >
          {children}
        </div>
      </TabsContent>
      {/* Always rendered (hidden when inactive) so the source is in the page HTML. */}
      <TabsContent value="code" forceMount className="mt-2 data-[state=inactive]:hidden">
        <CodeView html={codeHtml} code={code} />
      </TabsContent>
    </Tabs>
  )
}

export function CodeView({ html, code, className }: { html: string; code: string; className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <div
        className="docs-code max-h-[480px] overflow-auto rounded-lg border border-border bg-muted p-4 text-sm leading-6"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <CopyButton value={code} className="absolute end-3 top-3" />
    </div>
  )
}

/* ---------- Install tabs ---------- */

export function InstallTabs({ cli, manual }: { cli: React.ReactNode; manual: React.ReactNode }) {
  return (
    <Tabs defaultValue="cli" className="gap-4">
      <TabsList variant="line" aria-label="Installation method">
        <TabsTrigger value="cli">Command</TabsTrigger>
        <TabsTrigger value="manual">Manual</TabsTrigger>
      </TabsList>
      <TabsContent value="cli">{cli}</TabsContent>
      <TabsContent value="manual" forceMount className="data-[state=inactive]:hidden">
        {manual}
      </TabsContent>
    </Tabs>
  )
}

/* ---------- On this page ---------- */

export function TableOfContents() {
  const pathname = usePathname()
  const [items, setItems] = React.useState<{ id: string; text: string; level: number }[]>([])
  const [active, setActive] = React.useState<string>()

  React.useEffect(() => {
    const headings = [...document.querySelectorAll<HTMLElement>("[data-docs-content] h2[id], [data-docs-content] h3[id]")]
    // Read the rendered headings after paint.
    const frame = requestAnimationFrame(() =>
      setItems(headings.map((h) => ({ id: h.id, text: h.textContent ?? "", level: h.tagName === "H2" ? 2 : 3 })))
    )
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: "0px 0px -70% 0px" }
    )
    headings.forEach((h) => observer.observe(h))
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [pathname])

  if (!items.length) return null
  return (
    <nav aria-label="On this page" className="flex flex-col gap-2 text-sm">
      <p className="font-medium">On this page</p>
      <ul className="flex flex-col gap-1">
        {items.map((item, i) => (
          <li key={`${item.id}-${i}`} className={item.level === 3 ? "ps-3" : undefined}>
            <a
              href={`#${item.id}`}
              aria-current={active === item.id ? "location" : undefined}
              className="block py-1 text-muted-foreground hover:text-foreground aria-[current=location]:font-medium aria-[current=location]:text-[var(--button-selected-text)]"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
