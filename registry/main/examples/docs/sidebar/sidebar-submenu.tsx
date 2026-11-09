"use client"

import * as React from "react"

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/registry/main/ui/collapsible"
import { ChevronDownIcon, FileIcon } from "@/registry/main/ui/icons"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/registry/main/ui/sidebar"

const sections = [
  {
    label: "Getting started",
    pages: [
      { href: "#introduction", label: "Introduction" },
      { href: "#installation", label: "Installation" },
    ],
  },
  {
    label: "Components",
    pages: [
      { href: "#button", label: "Button" },
      { href: "#sidebar", label: "Sidebar" },
      { href: "#tabs", label: "Tabs" },
    ],
  },
]

export default function SidebarSubmenu() {
  const [current, setCurrent] = React.useState("#sidebar")
  return (
    <SidebarProvider className="relative isolate h-[560px] min-h-0 overflow-hidden rounded-lg border border-border">
      <Sidebar className="absolute h-full">
        <SidebarContent>
          <nav aria-label="Documentation">
            <SidebarGroup>
              <SidebarGroupLabel>Documentation</SidebarGroupLabel>
              <SidebarMenu>
                {sections.map((section) => (
                  <Collapsible
                    key={section.label}
                    asChild
                    defaultOpen={section.pages.some((p) => p.href === current)}
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                          <FileIcon />
                          <span>{section.label}</span>
                          <ChevronDownIcon className="ms-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub className="mt-1">
                          {section.pages.map((p) => (
                            <SidebarMenuSubItem key={p.href}>
                              <SidebarMenuSubButton
                                href={p.href}
                                isActive={current === p.href}
                                aria-current={current === p.href ? "page" : undefined}
                                onClick={(event) => {
                                  event.preventDefault()
                                  setCurrent(p.href)
                                }}
                              >
                                <span>{p.label}</span>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          </nav>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="gap-4 p-4">
        <SidebarTrigger />
        <p className="text-muted-foreground">Sections expand to show their pages. The current page stays highlighted.</p>
      </SidebarInset>
    </SidebarProvider>
  )
}
