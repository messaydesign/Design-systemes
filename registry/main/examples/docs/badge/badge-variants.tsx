import { Badge } from "@/registry/main/ui/badge"
import { CheckIcon } from "@/registry/main/ui/icons"

export default function BadgeVariants() {
  return (
    <>
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="secondary">
        <CheckIcon />
        Verified
      </Badge>
    </>
  )
}
