"use client"

import * as React from "react"

import { FileIcon, SearchIcon, UserIcon } from "@/registry/main/ui/icons"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
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
} from "@/registry/main/ui/sidebar"

const groups = [
  {
    label: "Workspace",
    links: [
      { href: "#projects", label: "Projects", icon: FileIcon },
      { href: "#search", label: "Search", icon: SearchIcon },
      { href: "#team", label: "Team", icon: UserIcon },
    ],
  },
  {
    label: "Reports",
    links: [
      { href: "#revenue", label: "Revenue", icon: FileIcon },
      { href: "#usage", label: "Usage", icon: FileIcon },
    ],
  },
]

export default function SidebarDemo() {
  const [current, setCurrent] = React.useState("#projects")
  const page = groups.flatMap((g) => g.links).find((link) => link.href === current)

  return (
    // Contained for the docs: in an app the provider wraps the root layout.
    <SidebarProvider className="relative isolate h-[560px] min-h-0 overflow-hidden rounded-lg border border-border">
      <Sidebar collapsible="icon" className="absolute h-full">
        <SidebarHeader>
          <a
            href="#home"
            onClick={(event) => event.preventDefault()}
            className="flex h-12 items-center font-heading font-bold group-data-[collapsible=icon]:sr-only"
          >
            Acme
          </a>
        </SidebarHeader>
        <SidebarContent>
          <nav aria-label="Main">
            {groups.map((group) => (
              <SidebarGroup key={group.label}>
                <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
                <SidebarMenu>
                  {group.links.map(({ href, label, icon: Icon }) => (
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
            ))}
          </nav>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Account">
                <UserIcon />
                <span>Account</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 items-center gap-2 border-b border-border px-4">
          <SidebarTrigger />
          <span className="font-semibold">{page?.label}</span>
        </header>
        <div className="flex flex-col gap-2 p-6">
          <p className="text-muted-foreground">
            Collapse to icons with the button, the rail on the sidebar edge or ⌘B / Ctrl+B. Below 768px it opens as a
            sheet.
          </p>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
