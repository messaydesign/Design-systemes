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
import { Field, FieldControl, FieldLabel } from "@/registry/main/ui/field"
import { Input } from "@/registry/main/ui/input"

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit profile</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Make changes to your profile. Save when you’re done.</DialogDescription>
        </DialogHeader>
        <Field>
          <FieldLabel htmlFor="dialog-name">Full name</FieldLabel>
          <FieldControl>
            <Input id="dialog-name" defaultValue="Messay M." />
          </FieldControl>
        </Field>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button>Save changes</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
