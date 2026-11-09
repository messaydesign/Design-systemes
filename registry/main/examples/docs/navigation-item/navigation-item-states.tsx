"use client"

import * as React from "react"

import { FileIcon } from "@/registry/main/ui/icons"
import { NavItem } from "@/registry/main/ui/nav-item"

const prevent = (event: React.MouseEvent) => event.preventDefault()

export default function NavigationItemStates() {
  return (
    <ul className="flex w-64 flex-col gap-2">
      <li>
        <NavItem href="#reports" onClick={prevent}>
          <FileIcon />
          <span>Default</span>
        </NavItem>
      </li>
      <li>
        <NavItem href="#reports" isActive onClick={prevent}>
          <FileIcon />
          <span>Current page</span>
        </NavItem>
      </li>
      <li>
        <NavItem href="#reports" disabled>
          <FileIcon />
          <span>Disabled</span>
        </NavItem>
      </li>
    </ul>
  )
}
