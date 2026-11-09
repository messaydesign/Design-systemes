"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { INVENTORY } from "@/lib/docs/inventory"
import { Button } from "@/registry/main/ui/button"
import { NavItem } from "@/registry/main/ui/nav-item"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/registry/main/ui/sheet"

/* Same structure as ui.shadcn.com: Getting Started, then one alphabetical Components list. */
export const GETTING_STARTED = [
  { href: "/docs", label: "Introduction" },
  { href: "/docs/installation", label: "Installation" },
  { href: "/docs/theming", label: "Theming" },
  { href: "/docs/components", label: "All components" },
  { href: "/docs/coverage", label: "Figma coverage" },
  { href: "/docs/contributing", label: "Contributing" },
]

/* Parts documented on another page (as shadcn does for Field). */
const COVERED_ELSEWHERE = new Set(["Field Set", "Field Group", "Counter"])

export const COMPONENTS = INVENTORY.filter(
  (item) => (item.status === "documented" || item.status === "built") && !COVERED_ELSEWHERE.has(item.name)
).sort((a, b) => a.name.localeCompare(b.name))

const compact = "h-9 text-sm md:text-sm"

function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="px-4 text-xs font-semibold tracking-wide text-muted-foreground uppercase">{children}</h2>
}

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()
  return (
    <div className="flex flex-col gap-6">
      <section className="flex flex-col gap-1">
        <Heading>Getting Started</Heading>
        {GETTING_STARTED.map((g) => (
          <NavItem key={g.href} asChild isActive={pathname === g.href} className={compact}>
            <Link href={g.href} onClick={onNavigate}>
              <span>{g.label}</span>
            </Link>
          </NavItem>
        ))}
      </section>
      <section className="flex flex-col gap-1">
        <Heading>Components</Heading>
        {COMPONENTS.map((item) =>
          item.status === "documented" ? (
            <NavItem key={item.slug} asChild isActive={pathname === `/docs/components/${item.slug}`} className={compact}>
              <Link href={`/docs/components/${item.slug}`} onClick={onNavigate}>
                <span>{item.name}</span>
              </Link>
            </NavItem>
          ) : (
            <NavItem key={item.slug} disabled className={compact} title="Documentation coming">
              <span>{item.name}</span>
            </NavItem>
          )
        )}
      </section>
    </div>
  )
}

export function DocsSidebar() {
  return (
    <nav aria-label="Documentation" className="pb-12">
      <NavList />
    </nav>
  )
}

export function DocsMobileNav() {
  const [open, setOpen] = React.useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="lg:hidden">
          Menu
        </Button>
      </SheetTrigger>
      <SheetContent side="start" className="w-80 overflow-y-auto">
        <SheetTitle>Documentation</SheetTitle>
        <SheetDescription className="sr-only">Browse guides and components</SheetDescription>
        <nav aria-label="Documentation">
          <NavList onNavigate={() => setOpen(false)} />
        </nav>
      </SheetContent>
    </Sheet>
  )
}
