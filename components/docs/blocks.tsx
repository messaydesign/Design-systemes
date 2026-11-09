import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { bySlug, figmaUrl } from "@/lib/docs/inventory"
import { highlight, readSource, REGISTRY_URL, registryItem, toConsumerSource } from "@/lib/docs/source"
import { examples } from "@/registry/main/examples/docs"
import { Badge } from "@/registry/main/ui/badge"
import { Button } from "@/registry/main/ui/button"
import { ArrowRightIcon, InfoIcon, WarningIcon } from "@/registry/main/ui/icons"
import { CodeView, InstallTabs, PreviewShell } from "@/components/docs/client"

/* ---------- Headings ---------- */

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
}

export function H2({ children, id }: { children: string; id?: string }) {
  return (
    <h2 id={id ?? slugify(children)} className="mt-12 scroll-mt-24 font-heading text-2xl font-bold tracking-tight first:mt-0">
      {children}
    </h2>
  )
}

export function H3({ children, id }: { children: string; id?: string }) {
  return (
    <h3 id={id ?? slugify(children)} className="mt-8 scroll-mt-24 font-heading text-lg font-semibold">
      {children}
    </h3>
  )
}

export function P({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("max-w-[70ch] leading-7 text-[var(--text-secondary)]", className)}>{children}</p>
}

export function InlineCode({ children }: { children: React.ReactNode }) {
  return <code className="rounded-sm bg-[var(--surface)] px-1.5 py-0.5 font-mono text-[0.875em] text-foreground">{children}</code>
}

/* ---------- Page header ---------- */

export function DocHeader({
  slug,
  title,
  description,
}: {
  /** Inventory slug: adds the Figma link and status. */
  slug?: string
  title: string
  description: string
}) {
  const item = slug ? bySlug(slug) : undefined
  return (
    <header className="flex flex-col gap-4">
      {item ? <p className="text-sm text-[var(--text-secondary)]">{item.group}</p> : null}
      <h1 className="font-heading text-4xl font-bold tracking-tight">{title}</h1>
      <p className="max-w-[70ch] text-lg leading-7 text-[var(--text-secondary)]">{description}</p>
      {item ? (
        <div className="flex flex-wrap items-center gap-2">
          <Button asChild size="sm" variant="secondary">
            <a href={figmaUrl(item.figma)} target="_blank" rel="noreferrer">
              Open in Figma
              <ArrowRightIcon />
            </a>
          </Button>
          {item.code.map((name) => (
            <Badge key={name} variant="outline">
              registry: {name}
            </Badge>
          ))}
        </div>
      ) : null}
    </header>
  )
}

/* ---------- Code ---------- */

export async function CodeBlock({ code, lang = "tsx", className }: { code: string; lang?: string; className?: string }) {
  const trimmed = code.trim()
  return <CodeView html={await highlight(trimmed, lang)} code={trimmed} className={className} />
}

/** Live example + the exact source file it renders. */
export async function ComponentPreview({
  name,
  align,
  minHeight,
}: {
  name: keyof typeof examples
  align?: "center" | "start"
  minHeight?: number
}) {
  const entry = examples[name]
  const code = toConsumerSource(readSource(entry.file)).trim()
  const Example = entry.component
  return (
    <PreviewShell code={code} codeHtml={await highlight(code)} align={align} minHeight={minHeight}>
      <Example />
    </PreviewShell>
  )
}

/* ---------- Installation (from registry.json) ---------- */

function depName(dep: string) {
  const match = dep.match(/\/r\/([^/]+)\.json$/)
  return match ? match[1] : dep
}

export async function Installation({ item: name }: { item: string }) {
  const item = registryItem(name)
  if (!item) return <Callout tone="warning">Registry item “{name}” not found.</Callout>

  const cli = `npx shadcn@latest add ${REGISTRY_URL}/r/${name}.json`
  const deps = item.dependencies ?? []
  const registryDeps = (item.registryDependencies ?? []).map(depName).filter((d) => d !== "utils")
  const files = item.files.map((f) => ({
    path: f.path.replace("registry/main/ui/", "components/ui/"),
    code: toConsumerSource(readSource(f.path)),
  }))

  return (
    <InstallTabs
      cli={
        <div className="flex flex-col gap-3">
          <CodeBlock code={cli} lang="bash" />
          <P>
            Installs the component and what it needs ({[...registryDeps, ...deps].join(", ") || "none"}). If your CSS
            already has the brand tokens, the CLI only adds missing ones — commit first and check the diff. In a project
            created from the starter you can write <InlineCode>npx shadcn@latest add @main/{name}</InlineCode>. With
            other package managers use <InlineCode>pnpm dlx shadcn@latest</InlineCode> or{" "}
            <InlineCode>bunx shadcn@latest</InlineCode>.
          </P>
        </div>
      }
      manual={
        <ol className="flex flex-col gap-6 ps-5 [&>li]:list-decimal [&>li]:ps-1">
          {deps.length ? (
            <li className="flex flex-col gap-3">
              <span>Install the npm dependencies.</span>
              <CodeBlock code={`npm install ${deps.join(" ")}`} lang="bash" />
            </li>
          ) : null}
          <li className="flex flex-col gap-2">
            <span>
              Add the theme and the components this one uses:{" "}
              {registryDeps.map((d, i) => (
                <React.Fragment key={d}>
                  {i ? ", " : null}
                  {d === "theme" ? <Link className="underline" href="/docs/theming">theme</Link> : <InlineCode>{d}</InlineCode>}
                </React.Fragment>
              ))}
              , plus <InlineCode>cn()</InlineCode> in <InlineCode>lib/utils.ts</InlineCode>.
            </span>
          </li>
          {files.map((file) => (
            <li key={file.path} className="flex flex-col gap-3">
              <span>
                Copy the source into <InlineCode>{file.path}</InlineCode>.
              </span>
              <CodeBlock code={file.code} />
            </li>
          ))}
          <li>Update the import paths to match your project.</li>
        </ol>
      }
    />
  )
}

/* ---------- Props table ---------- */

export type PropRow = { name: string; type: string; default?: string; description: React.ReactNode }

export function PropsTable({ rows, caption }: { rows: PropRow[]; caption?: string }) {
  return (
    <div className="overflow-x-auto rounded-[var(--radius)] border border-[var(--border-subtle)]">
      <table className="w-full min-w-[560px] border-collapse text-sm">
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        <thead className="bg-[var(--surface)] text-start">
          <tr>
            <th scope="col" className="px-4 py-3 text-start font-medium">Prop</th>
            <th scope="col" className="px-4 py-3 text-start font-medium">Type</th>
            <th scope="col" className="px-4 py-3 text-start font-medium">Default</th>
            <th scope="col" className="px-4 py-3 text-start font-medium">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name} className="border-t border-[var(--border-subtle)] align-top">
              <td className="px-4 py-3 font-mono text-[13px]">{row.name}</td>
              <td className="px-4 py-3 font-mono text-[13px] text-[var(--text-secondary)]">{row.type}</td>
              <td className="px-4 py-3 font-mono text-[13px] text-[var(--text-secondary)]">{row.default ?? "—"}</td>
              <td className="px-4 py-3 leading-6">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ---------- Callout ---------- */

export function Callout({
  tone = "info",
  title,
  children,
}: {
  tone?: "info" | "warning" | "missing"
  title?: string
  children: React.ReactNode
}) {
  const Icon = tone === "info" ? InfoIcon : WarningIcon
  return (
    <div
      className={cn(
        "flex gap-3 rounded-[var(--radius)] border p-[15px] text-sm leading-6",
        tone === "info" && "border-[var(--status-info-border)] bg-[var(--status-info-background)] text-[var(--status-info-text)]",
        tone === "warning" && "border-[var(--status-warning-border)] bg-[var(--status-warning-background)] text-[var(--status-warning-text)]",
        tone === "missing" && "border-dashed border-[var(--border-control)] bg-[var(--surface)] text-[var(--text-secondary)]"
      )}
    >
      <Icon className="mt-1 size-4 shrink-0" />
      <div className="flex flex-col gap-1">
        {title ? <p className="font-medium">{tone === "missing" ? `Not supported yet: ${title}` : title}</p> : null}
        <div>{children}</div>
      </div>
    </div>
  )
}

/** Bulleted accessibility notes. */
export function A11yList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="flex max-w-[70ch] flex-col gap-2 ps-5 leading-7 text-[var(--text-secondary)] [&>li]:list-disc">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}
