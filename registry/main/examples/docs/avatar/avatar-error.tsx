import { Avatar, AvatarBadge, AvatarFallback } from "@/registry/main/ui/avatar"

export default function AvatarError() {
  return (
    <Avatar size="lg">
      <AvatarFallback>KT</AvatarFallback>
      <AvatarBadge />
    </Avatar>
  )
}
