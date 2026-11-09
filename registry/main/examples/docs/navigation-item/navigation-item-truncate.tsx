"use client"

import * as React from "react"

import { FileIcon } from "@/registry/main/ui/icons"
import { NavItem } from "@/registry/main/ui/nav-item"

const prevent = (event: React.MouseEvent) => event.preventDefault()

export default function NavigationItemTruncate() {
  const label = "Quarterly planning — product, design and research"
  return (
    <ul className="flex w-56 flex-col gap-2">
      <li>
        <NavItem href="#planning" title={label} onClick={prevent}>
          <FileIcon />
          <span>{label}</span>
        </NavItem>
      </li>
    </ul>
  )
}
