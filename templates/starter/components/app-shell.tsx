"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { ThemeToggle } from "@/components/theme-toggle"
import { FileIcon } from "@/components/ui/icons"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { navigation } from "@/lib/navigation"

/**
 * Application frame built on the shadcn-compatible Sidebar: collapses to icons
 * on desktop (button, rail or ⌘B / Ctrl+B) and becomes a Sheet on phones.
 * Navigation comes from lib/navigation.ts.
 */
export function AppShell({ appName, children }: { appName: string; children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" variant="floating">
        <SidebarHeader>
          <Link href="/" className="flex h-12 items-center font-heading font-bold group-data-[collapsible=icon]:sr-only">
            {appName}
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <nav aria-label="Main">
            <NavGroups />
          </nav>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 items-center gap-2 border-b border-border px-4">
          <SidebarTrigger />
          <span className="font-heading font-bold md:hidden">{appName}</span>
          <div className="ms-auto">
            <ThemeToggle />
          </div>
        </header>
        <main id="main" className="flex-1 px-4 py-8 md:px-8">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

function NavGroups() {
  const pathname = usePathname()
  const { isMobile, setOpenMobile } = useSidebar()
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return navigation.map((group) => (
    <SidebarGroup key={group.label}>
      <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
      <SidebarMenu>
        {group.links.map(({ href, label, icon: Icon = FileIcon }) => (
          <SidebarMenuItem key={href}>
            <SidebarMenuButton asChild isActive={isActive(href)} tooltip={label}>
              <Link
                href={href}
                aria-current={isActive(href) ? "page" : undefined}
                onClick={() => isMobile && setOpenMobile(false)}
              >
                <Icon />
                <span>{label}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  ))
}
