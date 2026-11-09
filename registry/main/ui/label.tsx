"use client"

import * as React from "react"
import { Label as LabelPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

/* Figma "Brand Typography/Forms/Label": DM Sans Medium 14/24. */
function Label({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 font-sans text-sm leading-6 md:leading-5 font-medium text-foreground select-none",
        "group-data-[disabled=true]/field:text-[var(--disabled-text)] peer-disabled:text-[var(--disabled-text)]",
        className
      )}
      {...props}
    />
  )
}

export { Label }
