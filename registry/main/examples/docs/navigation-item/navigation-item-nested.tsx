"use client"

import * as React from "react"

import { FileIcon } from "@/registry/main/ui/icons"
import { NavItem } from "@/registry/main/ui/nav-item"

const prevent = (event: React.MouseEvent) => event.preventDefault()

export default function NavigationItemNested() {
  return (
    <nav aria-label="Settings" className="w-64">
      <ul className="flex flex-col gap-2">
        <li>
          <NavItem href="#general" onClick={prevent}>
            <FileIcon />
            <span>General</span>
          </NavItem>
        </li>
        <li className="flex flex-col gap-2">
          <NavItem href="#billing" onClick={prevent}>
            <FileIcon />
            <span>Billing</span>
          </NavItem>
          <ul className="ms-6 flex flex-col gap-2 border-s border-border ps-2">
            <li>
              <NavItem href="#plans" isActive onClick={prevent}>
                <span>Plans</span>
              </NavItem>
            </li>
            <li>
              <NavItem href="#invoices" onClick={prevent}>
                <span>Invoices</span>
              </NavItem>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}
