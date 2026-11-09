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
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { navigation } from "@/lib/navigation"

/**
 * Application frame: sidebar navigation (a Sheet on phones) and a top bar.
 * Navigation comes from lib/navigation.ts.
 */
export function AppShell({ appName, children }: { appName: string; children: React.ReactNode }) {
  const pathname = usePathname()
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return (
    <SidebarProvider className="min-h-svh gap-0 p-0 md:gap-6 md:p-4">
      <Sidebar aria-label="Main" className="md:sticky md:top-4 md:h-[calc(100svh-2rem)]">
        <SidebarHeader>
          <SidebarTrigger />
        </SidebarHeader>
        <SidebarContent>
          {navigation.map((group) => (
            <SidebarGroup key={group.label}>
              <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
              <SidebarMenu>
                {group.links.map(({ href, label, icon: Icon = FileIcon }) => (
                  <SidebarMenuItem key={href}>
                    <SidebarMenuButton asChild isActive={isActive(href)} tooltip={label}>
                      <Link href={href}>
                        <Icon />
                        <span>{label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          ))}
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="flex min-h-svh flex-col md:min-h-0">
        <header className="flex h-16 items-center gap-2 border-b border-[var(--border-subtle)] px-4 md:rounded-[var(--radius)] md:border">
          <div className="md:hidden">
            <SidebarTrigger variant="outline" size="sm" />
          </div>
          <Link href="/" className="font-heading font-bold">
            {appName}
          </Link>
          <div className="ms-auto">
            <ThemeToggle />
          </div>
        </header>
        <main id="main" className="flex-1 px-4 py-8 md:px-2">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
