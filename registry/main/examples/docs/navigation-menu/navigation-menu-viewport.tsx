import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/registry/main/ui/navigation-menu"

// viewport (shadcn default) renders one shared panel below the row that resizes between menus.
export default function NavigationMenuViewportExample() {
  return (
    <NavigationMenu viewport>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink asChild>
              <Link href="/docs">Introduction</Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href="/docs/theming">Theming</Link>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink asChild>
              <Link href="/docs/components/button">Button</Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href="/docs/components/badge">Badge</Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href="/docs/components/avatar">Avatar</Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href="/docs/components">All components</Link>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
