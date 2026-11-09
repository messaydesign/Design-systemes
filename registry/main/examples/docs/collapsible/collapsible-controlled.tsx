"use client"

import * as React from "react"

import { Button } from "@/registry/main/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/registry/main/ui/collapsible"
import { ChevronDownIcon } from "@/registry/main/ui/icons"

export default function CollapsibleControlled() {
  const [open, setOpen] = React.useState(true)

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="flex w-full max-w-sm flex-col gap-2">
      <CollapsibleTrigger asChild>
        <Button variant="ghost" className="justify-between [&[data-state=open]>svg]:rotate-180">
          Advanced settings
          <ChevronDownIcon className="transition-transform motion-reduce:transition-none" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="rounded-lg bg-muted p-4 text-sm text-muted-foreground">
        Caching, webhooks and API rate limits. Most teams never need to change these.
      </CollapsibleContent>
      <p className="text-sm text-muted-foreground">State: {open ? "open" : "closed"}</p>
    </Collapsible>
  )
}
