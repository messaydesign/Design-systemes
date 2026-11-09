import * as React from "react"

import { cn } from "@/lib/utils"
import { SpinnerIcon } from "@/registry/main/ui/icons"

/*
 * Spinner — Figma "Spinner" (135:2005): sizes 16 · 24 · 32 using Icons/spinner.
 * Same shape as shadcn's: a single svg taking svg props, so `className="size-8"`
 * works unchanged. Extras: `size` (sm 16 · default 24 · lg 32) and `label`
 * (accessible name, "Loading" by default). Rotation stops under reduced motion.
 */
const sizes = { sm: "size-4", default: "size-6", lg: "size-8" } as const

function Spinner({
  className,
  size = "default",
  label = "Loading",
  ...props
}: Omit<React.ComponentProps<"svg">, "children"> & { size?: keyof typeof sizes; label?: string }) {
  return (
    <SpinnerIcon
      data-slot="spinner"
      role="status"
      aria-label={label}
      aria-hidden={undefined}
      className={cn(sizes[size], className)}
      {...props}
    />
  )
}

export { Spinner }
