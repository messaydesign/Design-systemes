import { FieldError, FieldMessage } from "@/registry/main/ui/field"

export default function FieldMessageStatus() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <FieldMessage>Helper (default outside a validated Field)</FieldMessage>
      <FieldMessage status="info">Info — we’ll email you a copy.</FieldMessage>
      <FieldMessage status="success">Success — saved.</FieldMessage>
      <FieldMessage status="warning">Warning — this replaces the old value.</FieldMessage>
      <FieldMessage status="error">Error — enter a valid date.</FieldMessage>
      <FieldError>FieldError is the same as status=&quot;error&quot;.</FieldError>
    </div>
  )
}
