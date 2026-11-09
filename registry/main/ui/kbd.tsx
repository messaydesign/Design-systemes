import * as React from "react"

import { cn } from "@/lib/utils"

/* Kbd — Figma "Kbd" (161:235): 32px key, 8px padding, muted fill, input outline. */
function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "inline-flex h-8 items-center justify-center rounded-lg border border-input bg-muted px-[7px] font-sans text-sm leading-6 md:leading-5 font-medium text-foreground select-none",
        className
      )}
      {...props}
    />
  )
}

function KbdGroup({ className, ...props }: React.ComponentProps<"kbd">) {
  return <kbd data-slot="kbd-group" className={cn("inline-flex items-center gap-2", className)} {...props} />
}

export { Kbd, KbdGroup }
