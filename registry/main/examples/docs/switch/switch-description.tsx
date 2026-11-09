import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel } from "@/registry/main/ui/field"
import { Switch } from "@/registry/main/ui/switch"

const settings = [
  { id: "setting-digest", label: "Weekly digest", description: "A summary of activity every Monday.", on: true },
  { id: "setting-mentions", label: "Mentions", description: "Notify me when someone mentions me.", on: false },
]

export default function SwitchDescription() {
  return (
    <FieldGroup className="w-full max-w-md gap-4">
      {settings.map((setting) => (
        <Field key={setting.id} orientation="horizontal" className="items-center justify-between gap-4">
          <FieldContent className="gap-0">
            <FieldLabel htmlFor={setting.id}>{setting.label}</FieldLabel>
            <FieldDescription id={`${setting.id}-help`}>{setting.description}</FieldDescription>
          </FieldContent>
          <Switch id={setting.id} defaultChecked={setting.on} aria-describedby={`${setting.id}-help`} />
        </Field>
      ))}
    </FieldGroup>
  )
}
