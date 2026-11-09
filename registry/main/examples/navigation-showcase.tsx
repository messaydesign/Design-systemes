"use client"

import * as React from "react"

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/main/ui/breadcrumb"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/main/ui/dropdown-menu"
import { Field, FieldControl, FieldGroup, FieldLabel, FieldMessage } from "@/registry/main/ui/field"
import { FileIcon, UserIcon } from "@/registry/main/ui/icons"
import { Input } from "@/registry/main/ui/input"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/registry/main/ui/menubar"
import { NavItem } from "@/registry/main/ui/nav-item"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/registry/main/ui/navigation-menu"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/main/ui/pagination"
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
} from "@/registry/main/ui/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/main/ui/tabs"
import { PreviewFrame, Section } from "@/registry/main/examples/preview-frame"

const prevent = (event: React.MouseEvent) => event.preventDefault()

function AccountFields() {
  return (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="tab-name">Full name</FieldLabel>
        <FieldControl>
          <Input id="tab-name" placeholder="Enter your name" />
        </FieldControl>
        <FieldMessage>Helpful guidance for this field.</FieldMessage>
      </Field>
      <Field>
        <FieldLabel htmlFor="tab-email">Email</FieldLabel>
        <FieldControl>
          <Input id="tab-email" type="email" placeholder="name@example.com" />
        </FieldControl>
        <FieldMessage>Helpful guidance for this field.</FieldMessage>
      </Field>
    </FieldGroup>
  )
}

function TabsDemo({ variant, orientation }: { variant: "line" | "default"; orientation?: "horizontal" | "vertical" }) {
  return (
    <Tabs defaultValue="account" orientation={orientation}>
      <TabsList variant={variant} aria-label="Account settings">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="billing" disabled>
          Billing
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p className="font-semibold">Account details</p>
        <AccountFields />
      </TabsContent>
      <TabsContent value="password">
        <p className="font-semibold">Password</p>
        <p className="text-muted-foreground">Change your password here.</p>
      </TabsContent>
      <TabsContent value="security">
        <p className="font-semibold">Security</p>
        <p className="text-muted-foreground">Two-step verification and sessions.</p>
      </TabsContent>
    </Tabs>
  )
}

function Items() {
  return (
    <div className="flex flex-wrap gap-6">
      <div className="flex w-60 flex-col gap-2">
        <NavItem href="#projects" onClick={prevent}>
          <FileIcon />
          <span>Projects</span>
        </NavItem>
        <NavItem href="#projects" isActive onClick={prevent}>
          <FileIcon />
          <span>Current page</span>
        </NavItem>
        <NavItem href="#projects" disabled>
          <FileIcon />
          <span>Disabled</span>
        </NavItem>
      </div>
      <div dir="rtl" className="flex w-60 flex-col gap-2">
        <NavItem href="#projects" onClick={prevent}>
          <FileIcon />
          <span>المشاريع</span>
        </NavItem>
        <NavItem href="#projects" isActive onClick={prevent}>
          <FileIcon />
          <span>الصفحة الحالية</span>
        </NavItem>
      </div>
    </div>
  )
}

function Breadcrumbs() {
  return (
    <div className="flex flex-col gap-2">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#home" onClick={prevent}>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#projects" onClick={prevent}>Projects</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Case study</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#home" onClick={prevent}>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <BreadcrumbEllipsis />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>Projects</DropdownMenuItem>
                <DropdownMenuItem>Design system</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Case study</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Breadcrumb dir="rtl">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#home" onClick={prevent}>الرئيسية</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#projects" onClick={prevent}>المشاريع</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>دراسة حالة</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}

function PaginationDemo({ dir }: { dir?: "rtl" }) {
  const [page, setPage] = React.useState(2)
  const total = 5
  const go = (next: number) => (event: React.MouseEvent) => {
    event.preventDefault()
    setPage(next)
  }
  return (
    <Pagination dir={dir} className="justify-start">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" disabled={page === 1} onClick={go(page - 1)} />
        </PaginationItem>
        {Array.from({ length: total }, (_, i) => i + 1).map((n) => (
          <PaginationItem key={n}>
            <PaginationLink href="#" isActive={n === page} onClick={go(n)}>
              {n}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href="#" disabled={page === total} onClick={go(page + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

function MenubarDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>My account</MenubarLabel>
          <MenubarItem>
            <UserIcon />
            Profile
            <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <UserIcon />
            Settings
          </MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>
              <UserIcon />
              Share
            </MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email</MenubarItem>
              <MenubarItem>Copy link</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarItem variant="destructive">
            <UserIcon />
            Delete project
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo
            <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo
            <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem disabled>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Zoom in</MenubarItem>
          <MenubarItem>Zoom out</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            {["Foundations", "Components", "Patterns"].map((label) => (
              <NavigationMenuLink key={label} href={`#${label.toLowerCase()}`} onClick={prevent}>
                <FileIcon />
                <span>{label}</span>
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink variant="link" href="#documentation" onClick={prevent}>
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function SidebarDemo() {
  const [current, setCurrent] = React.useState("Projects")
  return (
    // Contained demo: the sidebar is positioned inside this frame instead of the viewport.
    <SidebarProvider className="relative isolate min-h-0 h-[640px] overflow-hidden rounded-lg border border-border">
      <Sidebar collapsible="icon" variant="floating" className="absolute h-full">
        <SidebarHeader>
          <SidebarTrigger />
        </SidebarHeader>
        <SidebarContent>
          <nav aria-label="Workspace">
            <SidebarGroup>
              <SidebarGroupLabel>Workspace</SidebarGroupLabel>
              <SidebarMenu>
                {["Projects", "Activity", "Settings"].map((label) => (
                  <SidebarMenuItem key={label}>
                    <SidebarMenuButton asChild isActive={current === label} tooltip={label}>
                      <a
                        href={`#${label.toLowerCase()}`}
                        aria-current={current === label ? "page" : undefined}
                        onClick={(event) => {
                          event.preventDefault()
                          setCurrent(label)
                        }}
                      >
                        <FileIcon />
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
      <SidebarInset className="flex flex-col gap-4 p-6">
        <div className="md:hidden">
          <SidebarTrigger />
        </div>
        <p className="font-semibold">{current}</p>
        <p className="text-muted-foreground">
          Collapse to icons with the button or ⌘B / Ctrl+B. Below 768px it opens as a Sheet.
        </p>
      </SidebarInset>
    </SidebarProvider>
  )
}

export function NavigationShowcase() {
  return (
    <PreviewFrame>
      <Section title="Tabs · Line / Default (pill) · Horizontal / Vertical">
        <div className="flex flex-col gap-12">
          <TabsDemo variant="line" />
          <TabsDemo variant="default" />
          <TabsDemo variant="line" orientation="vertical" />
        </div>
      </Section>
      <Section title="Navigation Item">
        <Items />
      </Section>
      <Section title="Breadcrumb · Default / Collapsed / RTL">
        <Breadcrumbs />
      </Section>
      <Section title="Pagination · LTR / RTL">
        <PaginationDemo />
        <PaginationDemo dir="rtl" />
      </Section>
      <Section title="Menubar">
        <MenubarDemo />
      </Section>
      <Section title="Navigation Menu">
        <NavigationMenuDemo />
      </Section>
      <Section title="Sidebar">
        <SidebarDemo />
      </Section>
    </PreviewFrame>
  )
}
