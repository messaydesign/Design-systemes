import { Button } from "@/registry/main/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/registry/main/ui/collapsible"
import { ChevronDownIcon } from "@/registry/main/ui/icons"

export default function CollapsibleDemo() {
  return (
    <Collapsible className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex items-center justify-between gap-4">
        <p className="font-semibold">Order #4821 · 3 items</p>
        <CollapsibleTrigger asChild>
          <Button variant="outline" size="sm" className="[&[data-state=open]>svg]:rotate-180">
            Details
            <ChevronDownIcon className="transition-transform motion-reduce:transition-none" />
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-lg border border-border px-4 py-3 text-sm">Linen shirt · €49</div>
      <CollapsibleContent className="flex flex-col gap-2">
        <div className="rounded-lg border border-border px-4 py-3 text-sm">Canvas tote · €19</div>
        <div className="rounded-lg border border-border px-4 py-3 text-sm">Wool socks · €12</div>
      </CollapsibleContent>
    </Collapsible>
  )
}
