"use client"

import * as React from "react"

import { FileIcon, SearchIcon, UserIcon } from "@/registry/main/ui/icons"
import { NavItem } from "@/registry/main/ui/nav-item"

const links = [
  { href: "#projects", label: "Projects", icon: FileIcon },
  { href: "#search", label: "Search", icon: SearchIcon },
  { href: "#team", label: "Team", icon: UserIcon },
]

export default function NavigationItemDemo() {
  const [current, setCurrent] = React.useState("#projects")
  return (
    <nav aria-label="Workspace" className="w-64">
      <ul className="flex flex-col gap-2">
        {links.map(({ href, label, icon: Icon }) => (
          <li key={href}>
            <NavItem
              href={href}
              isActive={current === href}
              onClick={(event) => {
                event.preventDefault()
                setCurrent(href)
              }}
            >
              <Icon />
              <span>{label}</span>
            </NavItem>
          </li>
        ))}
      </ul>
    </nav>
  )
}
