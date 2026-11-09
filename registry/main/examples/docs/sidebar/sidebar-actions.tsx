"use client"

import * as React from "react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/main/ui/dropdown-menu"
import { ChevronDownIcon, FileIcon, PlusIcon } from "@/registry/main/ui/icons"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/registry/main/ui/sidebar"

const projects = [
  { href: "#website", label: "Website redesign", count: 12 },
  { href: "#mobile", label: "Mobile app", count: 3 },
  { href: "#brand", label: "Brand refresh", count: 0 },
]

export default function SidebarActions() {
  const [current, setCurrent] = React.useState("#website")
  return (
    <SidebarProvider className="relative isolate h-[480px] min-h-0 overflow-hidden rounded-lg border border-border">
      <Sidebar className="absolute h-full">
        <SidebarContent>
          <nav aria-label="Projects">
            <SidebarGroup>
              <SidebarGroupLabel>Projects</SidebarGroupLabel>
              <SidebarGroupAction aria-label="Add project">
                <PlusIcon />
              </SidebarGroupAction>
              <SidebarMenu>
                {projects.map((project) => (
                  <SidebarMenuItem key={project.href}>
                    <SidebarMenuButton asChild isActive={current === project.href}>
                      <a
                        href={project.href}
                        aria-current={current === project.href ? "page" : undefined}
                        onClick={(event) => {
                          event.preventDefault()
                          setCurrent(project.href)
                        }}
                      >
                        <FileIcon />
                        <span>{project.label}</span>
                      </a>
                    </SidebarMenuButton>
                    {project.count > 0 ? (
                      <SidebarMenuBadge>
                        {project.count}
                        <span className="sr-only"> open tasks</span>
                      </SidebarMenuBadge>
                    ) : null}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <SidebarMenuAction showOnHover aria-label={`${project.label} options`}>
                          <ChevronDownIcon />
                        </SidebarMenuAction>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent side="right" align="start">
                        <DropdownMenuItem>Rename</DropdownMenuItem>
                        <DropdownMenuItem>Share</DropdownMenuItem>
                        <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          </nav>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="gap-4 p-4">
        <SidebarTrigger />
        <p className="text-muted-foreground">Hover or focus a project to show its options.</p>
      </SidebarInset>
    </SidebarProvider>
  )
}
