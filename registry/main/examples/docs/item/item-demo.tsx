import { Avatar, AvatarFallback } from "@/registry/main/ui/avatar"
import { Button } from "@/registry/main/ui/button"
import { ArrowRightIcon } from "@/registry/main/ui/icons"
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/registry/main/ui/item"

export default function ItemDemo() {
  return (
    <Item variant="outline" className="max-w-md">
      <ItemMedia>
        <Avatar>
          <AvatarFallback>AM</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Amina Mekonnen</ItemTitle>
        <ItemDescription>Product designer · Addis Ababa</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="icon" variant="ghost" aria-label="Open Amina’s profile">
          <ArrowRightIcon />
        </Button>
      </ItemActions>
    </Item>
  )
}
