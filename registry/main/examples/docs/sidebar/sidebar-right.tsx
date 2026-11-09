"use client"

import * as React from "react"

import { InfoIcon, UserIcon } from "@/registry/main/ui/icons"
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

export default function SidebarRight() {
  const [open, setOpen] = React.useState(true)
  return (
    <SidebarProvider
      open={open}
      onOpenChange={setOpen}
      className="relative isolate h-[400px] min-h-0 overflow-hidden rounded-lg border border-border"
    >
      <SidebarInset className="gap-4 p-4">
        <div className="flex items-center justify-between gap-2">
          <p className="font-semibold">Document</p>
          <SidebarTrigger />
        </div>
        <p className="text-muted-foreground">The details panel is {open ? "open" : "closed"}.</p>
      </SidebarInset>
      <Sidebar side="right" className="absolute h-full">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Details</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <InfoIcon />
                  <span>Properties</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <UserIcon />
                  <span>Collaborators</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}
