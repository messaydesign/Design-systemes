import { Button } from "@/registry/main/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/main/ui/sheet"

const events = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  title: i % 3 === 0 ? "Deployment succeeded" : i % 3 === 1 ? "Comment added" : "Settings changed",
  time: `${i + 2} hours ago`,
}))

// The whole sheet scrolls by default. Here only the list scrolls, so the header and footer stay put.
export default function SheetScroll() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Activity log</Button>
      </SheetTrigger>
      <SheetContent className="overflow-hidden">
        <SheetHeader>
          <SheetTitle>Activity</SheetTitle>
          <SheetDescription>Everything that happened in this project today.</SheetDescription>
        </SheetHeader>
        <ul className="-mx-2 flex min-h-0 flex-1 flex-col overflow-y-auto px-2" tabIndex={0} aria-label="Activity list">
          {events.map((event) => (
            <li key={event.id} className="flex flex-col border-b border-border py-3 last:border-b-0">
              <span className="font-medium">{event.title}</span>
              <span className="text-sm text-muted-foreground">{event.time}</span>
            </li>
          ))}
        </ul>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
