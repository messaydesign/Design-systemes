import { Button } from "@/registry/main/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/main/ui/dialog"

export default function DialogScroll() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Read terms</Button>
      </DialogTrigger>
      <DialogContent corner="soft">
        <DialogHeader>
          <DialogTitle>Terms of service</DialogTitle>
          <DialogDescription>Scroll to read everything before accepting.</DialogDescription>
        </DialogHeader>
        <div className="-mx-2 max-h-64 overflow-y-auto px-2" tabIndex={0} aria-label="Terms text">
          {Array.from({ length: 8 }, (_, i) => (
            <p key={i} className="mb-4 leading-7 text-muted-foreground">
              Section {i + 1}. Long content scrolls inside the dialog body, so the title and the actions stay visible.
              The scrolling region is focusable so keyboard users can scroll it too.
            </p>
          ))}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Decline</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button>Accept</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
