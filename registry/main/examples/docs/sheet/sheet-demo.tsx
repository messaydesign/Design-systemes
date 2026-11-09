import { Button } from "@/registry/main/ui/button"
import { Field, FieldControl, FieldLabel } from "@/registry/main/ui/field"
import { Input } from "@/registry/main/ui/input"
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

export default function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Edit profile</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>Changes are visible to your team once you save.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4">
          <Field>
            <FieldLabel htmlFor="sheet-name">Full name</FieldLabel>
            <FieldControl>
              <Input id="sheet-name" defaultValue="Messay M." />
            </FieldControl>
          </Field>
          <Field>
            <FieldLabel htmlFor="sheet-handle">Username</FieldLabel>
            <FieldControl>
              <Input id="sheet-handle" defaultValue="@messay" />
            </FieldControl>
          </Field>
        </div>
        <SheetFooter className="mt-auto">
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <SheetClose asChild>
            <Button>Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
