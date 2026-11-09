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

export default function DialogWithoutCloseButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Show shortcut tips</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Tip</DialogTitle>
          <DialogDescription>Press ⌘K anywhere to search. Escape also closes this dialog.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Got it</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
