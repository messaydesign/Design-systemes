import Link from "next/link"

import { FileIcon, SearchIcon, UserIcon } from "@/registry/main/ui/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/registry/main/ui/navigation-menu"

// `active` marks the current page: aria-current="page" plus the selected tint.
// Items take a 16px leading icon and can be described with a <span> that truncates.
export default function NavigationMenuActive() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Account</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink asChild active>
              <Link href="/docs/components/navigation-menu">
                <UserIcon />
                <span>Profile</span>
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href="/docs/components/input">
                <SearchIcon />
                <span>Search history</span>
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href="/docs/components/card">
                <FileIcon />
                <span>Invoices and receipts</span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
