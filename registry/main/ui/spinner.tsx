import * as React from "react"

import { cn } from "@/lib/utils"
import { SpinnerIcon } from "@/registry/main/ui/icons"

/*
 * Spinner — Figma "Spinner" (135:2005): sizes 16 · 24 · 32 using Icons/spinner.
 * Announces "Loading" unless a label is given; rotation stops under reduced motion.
 */
const sizes = { sm: "size-4", default: "size-6", lg: "size-8" } as const

function Spinner({
  className,
  size = "default",
  label = "Loading",
  ...props
}: Omit<React.ComponentProps<"span">, "children"> & { size?: keyof typeof sizes; label?: string }) {
  return (
    <span data-slot="spinner" role="status" className={cn("inline-flex", className)} {...props}>
      <SpinnerIcon className={sizes[size]} />
      <span className="sr-only">{label}</span>
    </span>
  )
}

export { Spinner }
