import * as React from "react"

import { cn } from "@/lib/utils"

/*
 * Skeleton — Figma "Skeleton" (144:229): neutral placeholder blocks
 * (8px radius; use rounded-full for avatars). aria-hidden — the owning region
 * should set aria-busy. Pulse animation is off under reduced motion.
 */
function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      aria-hidden="true"
      className={cn("rounded-[var(--radius)] bg-[var(--skeleton)] motion-safe:animate-pulse", className)}
      {...props}
    />
  )
}

export { Skeleton }
