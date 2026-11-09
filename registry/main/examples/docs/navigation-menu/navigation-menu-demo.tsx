import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/registry/main/ui/navigation-menu"

const overlays = [
  { href: "/docs/components/dialog", title: "Dialog" },
  { href: "/docs/components/sheet", title: "Sheet" },
  { href: "/docs/components/popover", title: "Popover" },
]

const forms = [
  { href: "/docs/components/input", title: "Input" },
  { href: "/docs/components/select", title: "Select" },
  { href: "/docs/components/field", title: "Field" },
]

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Overlays</NavigationMenuTrigger>
          <NavigationMenuContent>
            {overlays.map((link) => (
              <NavigationMenuLink key={link.href} asChild>
                <Link href={link.href}>{link.title}</Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Forms</NavigationMenuTrigger>
          <NavigationMenuContent>
            {forms.map((link) => (
              <NavigationMenuLink key={link.href} asChild>
                <Link href={link.href}>{link.title}</Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink variant="link" asChild>
            <Link href="/docs/theming">Theming</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
