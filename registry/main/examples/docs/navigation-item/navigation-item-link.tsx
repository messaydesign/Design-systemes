import Link from "next/link"

import { FileIcon } from "@/registry/main/ui/icons"
import { NavItem } from "@/registry/main/ui/nav-item"

export default function NavigationItemLink() {
  return (
    <nav aria-label="Components" className="w-64">
      <ul className="flex flex-col gap-2">
        <li>
          <NavItem asChild>
            <Link href="/docs/components/button">
              <FileIcon />
              <span>Button</span>
            </Link>
          </NavItem>
        </li>
        <li>
          <NavItem asChild isActive>
            <Link href="/docs/components/navigation-item">
              <FileIcon />
              <span>Navigation Item</span>
            </Link>
          </NavItem>
        </li>
      </ul>
    </nav>
  )
}
