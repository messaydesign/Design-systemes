"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarProvider,
} from "@/registry/main/ui/sidebar"

export default function SidebarSkeleton() {
  return (
    <SidebarProvider className="relative isolate h-[400px] min-h-0 overflow-hidden rounded-lg border border-border">
      <Sidebar className="absolute h-full">
        <SidebarContent>
          <SidebarGroup aria-busy="true">
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            <SidebarMenu>
              {Array.from({ length: 5 }, (_, i) => (
                <SidebarMenuItem key={i}>
                  <SidebarMenuSkeleton showIcon />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            <span className="sr-only" role="status">
              Loading projects
            </span>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="p-4">
        <p className="text-muted-foreground">Show skeleton rows while the menu loads.</p>
      </SidebarInset>
    </SidebarProvider>
  )
}
