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

const prevent = (event: React.MouseEvent) => event.preventDefault()

const middle = [
  { href: "#projects", label: "Projects" },
  { href: "#marketing", label: "Marketing" },
  { href: "#website", label: "Website redesign" },
]

export default function BreadcrumbResponsive() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#home" onClick={prevent}>
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {/* Phones: middle pages collapse behind “…”. */}
        <BreadcrumbItem className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <BreadcrumbEllipsis />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {middle.map((page) => (
                <DropdownMenuItem key={page.href} asChild>
                  <a href={page.href} onClick={prevent}>
                    {page.label}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="md:hidden" />
        {/* Wider screens: the full trail. */}
        {middle.map((page) => (
          <React.Fragment key={page.href}>
            <BreadcrumbItem className="hidden md:inline-flex">
              <BreadcrumbLink href={page.href} onClick={prevent}>
                {page.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:inline-flex" />
          </React.Fragment>
        ))}
        <BreadcrumbItem>
          <BreadcrumbPage>Home page copy</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
