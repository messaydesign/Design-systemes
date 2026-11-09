import { Avatar, AvatarFallback } from "@/registry/main/ui/avatar"
import { Badge } from "@/registry/main/ui/badge"
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from "@/registry/main/ui/item"

const people = [
  { initials: "AM", name: "Amina Mekonnen", email: "amina@example.com", role: "Admin" },
  { initials: "KT", name: "Kebede Tadesse", email: "kebede@example.com", role: "Editor" },
  { initials: "SL", name: "Sara Lemma", email: "sara@example.com", role: "Viewer" },
]

export default function ItemGroupExample() {
  return (
    <ItemGroup aria-label="Team members" className="w-full max-w-md">
      {people.map((p) => (
        <Item key={p.email} variant="outline">
          <ItemMedia>
            <Avatar size="sm">
              <AvatarFallback>{p.initials}</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{p.name}</ItemTitle>
            <ItemDescription>{p.email}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Badge variant={p.role === "Admin" ? "default" : "secondary"}>{p.role}</Badge>
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  )
}
