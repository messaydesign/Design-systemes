import { Avatar, AvatarFallback, AvatarImage } from "@/registry/main/ui/avatar"

const photo = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' fill='%23f3c4a7'/><circle cx='32' cy='26' r='12' fill='%237a4a33'/><rect x='12' y='42' width='40' height='30' rx='20' fill='%23b8562f'/></svg>"

export default function AvatarDemo() {
  return (
    <>
      <Avatar>
        <AvatarImage src={photo} alt="Amina Mekonnen" />
        <AvatarFallback>AM</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>KT</AvatarFallback>
      </Avatar>
    </>
  )
}
