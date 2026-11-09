import { Field, FieldContent, FieldError, FieldLabel } from "@/registry/main/ui/field"
import { Switch } from "@/registry/main/ui/switch"

export default function SwitchValidation() {
  return (
    <Field validation="error" orientation="horizontal" className="max-w-md items-start gap-2">
      <Switch id="backups" aria-invalid aria-describedby="backups-msg" />
      <FieldContent className="gap-0 pt-1">
        <FieldLabel htmlFor="backups">Automatic backups</FieldLabel>
        <FieldError id="backups-msg">Backups are required for production workspaces.</FieldError>
      </FieldContent>
    </Field>
  )
}
