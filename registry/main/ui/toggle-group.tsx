"use client"

import * as React from "react"
import { type VariantProps } from "class-variance-authority"
import { ToggleGroup as ToggleGroupPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { toggleVariants } from "@/registry/main/ui/toggle"

/*
 * Toggle Group — Figma "Toggle Group" (143:4687)
 * Single/Multiple selection, Horizontal/Vertical, Toggle items 8px apart.
 * Radix enforces the selection policy and gives a roving tab stop with
 * arrows/Home/End (logical in RTL). Label the group with aria-label.
 * Use Radio Group, not this, for choosing form data.
 *
 * shadcn API: `variant`, `size` and `spacing` are shared with items through
 * context. `spacing` is the gap in Tailwind spacing units (2 = 8px). It
 * defaults to 2 to keep the Figma look (shadcn defaults to 0); `spacing={0}`
 * gives connected segments with a shared seam and only the outer corners rounded.
 */

type ToggleGroupStyle = VariantProps<typeof toggleVariants>

const ToggleGroupContext = React.createContext<ToggleGroupStyle & { spacing?: number }>({
  variant: "outline",
  size: "default",
  corner: "default",
  spacing: 2,
})

// Outer corners for connected (spacing 0) segments, per corner style.
const connectedCorners = {
  default:
    "group-data-[orientation=horizontal]/toggle-group:first:rounded-s-lg group-data-[orientation=horizontal]/toggle-group:last:rounded-e-lg group-data-[orientation=vertical]/toggle-group:first:rounded-t-lg group-data-[orientation=vertical]/toggle-group:last:rounded-b-lg",
  soft: "group-data-[orientation=horizontal]/toggle-group:first:rounded-s-xl group-data-[orientation=horizontal]/toggle-group:last:rounded-e-xl group-data-[orientation=vertical]/toggle-group:first:rounded-t-xl group-data-[orientation=vertical]/toggle-group:last:rounded-b-xl",
  pill: "group-data-[orientation=horizontal]/toggle-group:first:rounded-s-full group-data-[orientation=horizontal]/toggle-group:last:rounded-e-full group-data-[orientation=vertical]/toggle-group:first:rounded-t-full group-data-[orientation=vertical]/toggle-group:last:rounded-b-full",
} as const

function ToggleGroup({
  className,
  variant = "outline",
  size = "default",
  corner = "default",
  spacing = 2,
  orientation = "horizontal",
  style,
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> & ToggleGroupStyle & { spacing?: number }) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      data-spacing={spacing}
      data-orientation={orientation}
      orientation={orientation}
      style={{ "--gap": spacing, ...style } as React.CSSProperties}
      className={cn(
        "group/toggle-group flex w-fit items-start gap-[--spacing(var(--gap))] data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch",
        className
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size, corner, spacing }}>{children}</ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
}

function ToggleGroupItem({
  className,
  variant,
  size,
  corner,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> & ToggleGroupStyle) {
  const context = React.useContext(ToggleGroupContext)
  const resolvedVariant = variant ?? context.variant
  const resolvedSize = size ?? context.size
  const resolvedCorner = corner ?? context.corner ?? "default"
  const connected = context.spacing === 0
  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      data-variant={resolvedVariant}
      data-size={resolvedSize}
      data-spacing={context.spacing}
      className={cn(
        toggleVariants({ variant: resolvedVariant, size: resolvedSize, corner: resolvedCorner }),
        connected && [
          "shrink-0 rounded-none focus:z-10 focus-visible:z-10",
          connectedCorners[resolvedCorner],
          // Shared seam: neighbouring outline borders overlap by 1px.
          resolvedVariant === "outline" &&
            "group-data-[orientation=horizontal]/toggle-group:not-first:-ms-px group-data-[orientation=vertical]/toggle-group:not-first:-mt-px hover:z-10 selected:z-10",
        ],
        className
      )}
      {...props}
    />
  )
}

export { ToggleGroup, ToggleGroupItem }
