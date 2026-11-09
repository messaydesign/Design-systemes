import { Avatar, AvatarFallback } from "@/registry/main/ui/avatar"

export default function AvatarSizes() {
  return (
    <>
      <Avatar size="sm"><AvatarFallback>32</AvatarFallback></Avatar>
      <Avatar><AvatarFallback>48</AvatarFallback></Avatar>
      <Avatar size="lg"><AvatarFallback>64</AvatarFallback></Avatar>
    </>
  )
}
