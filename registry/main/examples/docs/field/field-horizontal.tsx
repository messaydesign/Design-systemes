import { Field, FieldControl, FieldLabel } from "@/registry/main/ui/field"
import { Input } from "@/registry/main/ui/input"

export default function FieldHorizontal() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      {["First name", "Last name"].map((label) => {
        const id = label.toLowerCase().replace(" ", "-")
        return (
          <Field key={id} orientation="horizontal">
            <FieldLabel htmlFor={id} className="w-32">
              {label}
            </FieldLabel>
            <FieldControl>
              <Input id={id} />
            </FieldControl>
          </Field>
        )
      })}
    </div>
  )
}
