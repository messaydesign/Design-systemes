import { Button } from "@/registry/main/ui/button"
import { NavItem } from "@/registry/main/ui/nav-item"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/registry/main/ui/sheet"

const links = ["Overview", "Projects", "Team", "Billing", "Settings"]

// A leading sheet for navigation on small screens. The title can be visually hidden.
export default function SheetNavigation() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open menu</Button>
      </SheetTrigger>
      <SheetContent side="start" corner="soft" closeLabel="Close menu" className="max-w-80">
        <SheetHeader>
          <SheetTitle>Workspace</SheetTitle>
        </SheetHeader>
        <nav aria-label="Workspace" className="flex flex-col gap-2">
          {links.map((link, i) => (
            <NavItem key={link} href="#" isActive={i === 1}>
              {link}
            </NavItem>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
