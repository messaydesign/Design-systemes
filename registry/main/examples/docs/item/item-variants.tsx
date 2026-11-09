import { Item, ItemContent, ItemDescription, ItemTitle } from "@/registry/main/ui/item"

export default function ItemVariants() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      {(["default", "outline", "muted"] as const).map((variant) => (
        <Item key={variant} variant={variant}>
          <ItemContent>
            <ItemTitle>{variant[0].toUpperCase() + variant.slice(1)}</ItemTitle>
            <ItemDescription>variant=&quot;{variant}&quot;</ItemDescription>
          </ItemContent>
        </Item>
      ))}
    </div>
  )
}
