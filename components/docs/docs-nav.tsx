"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { GROUPS, INVENTORY } from "@/lib/docs/inventory"
import { Button } from "@/registry/main/ui/button"
import { NavItem } from "@/registry/main/ui/nav-item"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/registry/main/ui/sheet"

const GUIDES = [
  { href: "/docs", label: "Introduction" },
  { href: "/docs/installation", label: "Installation" },
  { href: "/docs/theming", label: "Theming and tokens" },
  { href: "/docs/coverage", label: "Coverage" },
  { href: "/docs/contributing", label: "Contributing" },
]

const PLAYGROUND = [
  { href: "/docs/playground/button", label: "Button" },
  { href: "/docs/playground/actions", label: "Actions" },
  { href: "/docs/playground/forms", label: "Forms" },
  { href: "/docs/playground/forms/more", label: "More form controls" },
  { href: "/docs/playground/navigation", label: "Navigation" },
  { href: "/docs/playground/overlays", label: "Overlays" },
  { href: "/docs/playground/display", label: "Content and feedback" },
]

const compact = "h-9 text-sm"

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()
  return (
    <div className="flex flex-col gap-6">
      <section className="flex flex-col gap-1">
        <h2 className="px-4 text-xs font-semibold tracking-wide text-[var(--text-secondary)] uppercase">Get started</h2>
        {GUIDES.map((g) => (
          <NavItem key={g.href} asChild isActive={pathname === g.href} className={compact}>
            <Link href={g.href} onClick={onNavigate}>
              <span>{g.label}</span>
            </Link>
          </NavItem>
        ))}
      </section>
      <section className="flex flex-col gap-1">
        <h2 className="px-4 text-xs font-semibold tracking-wide text-[var(--text-secondary)] uppercase">
          Playground · all states
        </h2>
        {PLAYGROUND.map((p) => (
          <NavItem key={p.href} asChild isActive={pathname === p.href} className={compact}>
            <Link href={p.href} onClick={onNavigate}>
              <span>{p.label}</span>
            </Link>
          </NavItem>
        ))}
      </section>
      {GROUPS.map((group) => {
        const items = INVENTORY.filter((item) => item.group === group && item.status !== "design-only")
        if (!items.length) return null
        return (
          <section key={group} className="flex flex-col gap-1">
            <h2 className="px-4 text-xs font-semibold tracking-wide text-[var(--text-secondary)] uppercase">{group}</h2>
            {items.map((item) =>
              item.status === "documented" ? (
                <NavItem
                  key={item.slug}
                  asChild
                  isActive={pathname === `/docs/components/${item.slug}`}
                  className={compact}
                >
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
        )
      })}
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
