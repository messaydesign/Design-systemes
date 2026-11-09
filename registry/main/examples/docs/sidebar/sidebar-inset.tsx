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
  { href: "#inbox", label: "Inbox", icon: FileIcon },
  { href: "#search", label: "Search", icon: SearchIcon },
  { href: "#contacts", label: "Contacts", icon: UserIcon },
]

export default function SidebarInsetVariant() {
  const [current, setCurrent] = React.useState("#inbox")
  return (
    <SidebarProvider className="relative isolate h-[480px] min-h-0 overflow-hidden rounded-lg border border-border">
      <Sidebar variant="inset" className="absolute h-full">
        <SidebarContent>
          <nav aria-label="Mail">
            <SidebarGroup>
              <SidebarGroupLabel>Mail</SidebarGroupLabel>
              <SidebarMenu>
                {links.map(({ href, label, icon: Icon }) => (
                  <SidebarMenuItem key={href}>
                    <SidebarMenuButton asChild isActive={current === href}>
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
        <p className="text-muted-foreground">
          The inset variant frames the page as a card on the sidebar surface. It collapses off-canvas.
        </p>
      </SidebarInset>
    </SidebarProvider>
  )
}
