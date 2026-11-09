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
 */

type ToggleGroupStyle = VariantProps<typeof toggleVariants>

const ToggleGroupContext = React.createContext<ToggleGroupStyle>({ variant: "outline", corner: "default" })

function ToggleGroup({
  className,
  variant = "outline",
  corner = "default",
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> & ToggleGroupStyle) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      className={cn("flex w-fit items-start gap-2 data-[orientation=vertical]:flex-col", className)}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, corner }}>{children}</ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
}

function ToggleGroupItem({
  className,
  variant,
  corner,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> & ToggleGroupStyle) {
  const context = React.useContext(ToggleGroupContext)
  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      className={cn(
        toggleVariants({ variant: variant ?? context.variant, corner: corner ?? context.corner }),
        className
      )}
      {...props}
    />
  )
}

export { ToggleGroup, ToggleGroupItem }
