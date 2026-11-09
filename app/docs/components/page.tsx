import type { Metadata } from "next"
import Link from "next/link"

import { DocHeader } from "@/components/docs/blocks"
import { COMPONENTS } from "@/lib/docs/inventory"

export const metadata: Metadata = { title: "Components" }

export default function ComponentsIndex() {
  return (
    <>
      <DocHeader
        title="Components"
        description="Every component in the registry. Add one with npx shadcn@latest add @main/<name>."
      />
      <ul className="grid gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
        {COMPONENTS.map((item) => (
          <li key={item.slug}>
            {item.status === "documented" ? (
              <Link href={`/docs/components/${item.slug}`} className="inline-flex min-h-12 items-center underline-offset-4 hover:underline">
                {item.name}
              </Link>
            ) : (
              <span className="inline-flex min-h-12 items-center text-muted-foreground">
                {item.name}
                <span className="sr-only"> (documentation coming)</span>
              </span>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}
