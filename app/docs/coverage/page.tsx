import type { Metadata } from "next"
import Link from "next/link"

import { DocHeader, H2, P } from "@/components/docs/blocks"
import { figmaUrl, GROUPS, INVENTORY, sectionsFor, type Status } from "@/lib/docs/inventory"
import { Badge } from "@/registry/main/ui/badge"

export const metadata: Metadata = { title: "Coverage" }

const statusLabel: Record<Status, string> = {
  documented: "Documented",
  built: "Code, no docs",
  partial: "Partial",
  "design-only": "Figma only",
}
const statusVariant: Record<Status, "default" | "secondary" | "outline" | "destructive"> = {
  documented: "default",
  built: "secondary",
  partial: "outline",
  "design-only": "outline",
}

export default function CoveragePage() {
  const count = (s: Status) => INVENTORY.filter((i) => i.status === s).length
  return (
    <>
      <DocHeader
        title="Coverage"
        description="Every component guide in the Figma file, its code, the docs it needs and what is missing."
      />
      <div className="flex flex-wrap gap-2">
        {(["documented", "built", "partial", "design-only"] as Status[]).map((s) => (
          <Badge key={s} variant={statusVariant[s]}>
            {statusLabel[s]}: {count(s)}
          </Badge>
        ))}
      </div>
      {GROUPS.map((group) => (
        <section key={group} className="flex flex-col gap-3">
          <H2>{group}</H2>
          <div className="overflow-x-auto rounded-[var(--radius)] border border-[var(--border-subtle)]">
            <table className="w-full min-w-[900px] text-sm">
              <thead className="bg-[var(--surface)]">
                <tr>
                  {["Component", "Status", "Code", "Props", "Variants and states", "Doc sections", "Missing"].map((h) => (
                    <th key={h} scope="col" className="px-3 py-2 text-start align-bottom font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {INVENTORY.filter((i) => i.group === group).map((item) => (
                  <tr key={item.slug} className="border-t border-[var(--border-subtle)] align-top">
                    <th scope="row" className="px-3 py-2 text-start font-medium">
                      {item.status === "documented" ? (
                        <Link className="underline" href={`/docs/components/${item.slug}`}>{item.name}</Link>
                      ) : (
                        item.name
                      )}
                      <a className="mt-1 block text-xs font-normal text-[var(--text-secondary)] underline" href={figmaUrl(item.figma)} target="_blank" rel="noreferrer">
                        Figma
                      </a>
                    </th>
                    <td className="px-3 py-2"><Badge variant={statusVariant[item.status]}>{statusLabel[item.status]}</Badge></td>
                    <td className="px-3 py-2 font-mono text-xs">{item.code.join(", ") || "—"}</td>
                    <td className="px-3 py-2 text-[var(--text-secondary)]">{item.props}</td>
                    <td className="px-3 py-2 text-[var(--text-secondary)]">{item.examples}</td>
                    <td className="px-3 py-2 text-xs text-[var(--text-secondary)]">{sectionsFor(item).join(" · ")}</td>
                    <td className="px-3 py-2 text-[var(--text-secondary)]">{item.missing ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
      <P>Internal Figma building blocks (.Button/Content, Overlay / Panel, Menu / Item, Calendar day…) are covered by the components that use them.</P>
    </>
  )
}
