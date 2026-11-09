"use client"

import * as React from "react"

import { FileIcon, SearchIcon, UserIcon } from "@/registry/main/ui/icons"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/registry/main/ui/sidebar"

const links = [
  { href: "#projects", label: "Projects", icon: FileIcon },
  { href: "#search", label: "Search", icon: SearchIcon },
  { href: "#team", label: "Team", icon: UserIcon },
]

export default function SidebarFloating() {
  const [current, setCurrent] = React.useState("#projects")
  return (
    <SidebarProvider className="relative isolate h-[480px] min-h-0 overflow-hidden rounded-lg border border-border">
      <Sidebar variant="floating" collapsible="icon" className="absolute h-full">
        <SidebarContent>
          <nav aria-label="Main">
            <SidebarGroup>
              <SidebarGroupLabel>Workspace</SidebarGroupLabel>
              <SidebarMenu>
                {links.map(({ href, label, icon: Icon }) => (
                  <SidebarMenuItem key={href}>
                    <SidebarMenuButton asChild isActive={current === href} tooltip={label}>
                      <a
                        href={href}
                        aria-current={current === href ? "page" : undefined}
                        onClick={(event) => {
                          event.preventDefault()
                          setCurrent(href)
                        }}
                      >
                        <Icon />
                        <span>{label}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          </nav>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="gap-4 p-4">
        <SidebarTrigger />
        <p className="text-muted-foreground">A floating sidebar sits 8px in from the edge with its own border.</p>
      </SidebarInset>
    </SidebarProvider>
  )
}
