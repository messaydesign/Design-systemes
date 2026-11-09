"use client"

import * as React from "react"
import { HoverCard as HoverCardPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

/*
 * Hover Card — Figma "Hover Card" (148:209), "Hover Card / Content" (148:149)
 * 368px, 16px padding, 8px gap, subtle border. Supplementary preview only:
 * essential information must also exist at the link destination.
 */

const HoverCard = HoverCardPrimitive.Root
const HoverCardTrigger = HoverCardPrimitive.Trigger

function HoverCardContent({
  className,
  align = "center",
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Content>) {
  return (
    <HoverCardPrimitive.Portal>
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "z-50 flex w-[368px] max-w-[calc(100vw-2rem)] flex-col gap-2 p-[15px] outline-none",
          "rounded-lg border border-border bg-popover font-sans text-base leading-6 text-foreground",
          className
        )}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  )
}

export { HoverCard, HoverCardContent, HoverCardTrigger }
