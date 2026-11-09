"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Toggle as TogglePrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/registry/main/ui/button"

/*
 * Toggle — Figma "Toggle" (143:4586)
 * Variant Default (Ghost face) / Outline, Selected true/false,
 * States Default · Hover · Pressed · Focus · Disabled. 48px, 8px radius.
 * Selected = Ghost Selected tint + border (Default) or selected border (Outline).
 * Hover/Pressed on a selected toggle show the neutral hover/pressed face,
 * as in the Figma masters. Radix sets aria-pressed and data-state="on".
 * Swap the icon for a meaningful symbol; keep a non-colour selected cue.
 */

const toggleVariants = cva(
  "h-12 min-w-12 px-[11px] [&_svg:not([class*='size-'])]:size-6",
  {
    variants: {
      variant: {
        default: [
          buttonVariants({ variant: "ghost", size: null, corner: null }),
          "selected:hover:border-transparent selected:hover:bg-[var(--button-ghost-hover-background)] selected:hover:text-[var(--button-neutral-text)]",
          "selected:active:bg-[var(--button-ghost-pressed-background)]",
        ],
        outline: [
          buttonVariants({ variant: "outline", size: null, corner: null }),
          "selected:hover:border-[var(--button-outline-hover-border)] selected:hover:text-[var(--button-neutral-text)]",
          "selected:active:border-[var(--button-outline-pressed-border)]",
        ],
      },
      corner: {
        default: "rounded-lg",
        soft: "rounded-xl",
        pill: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      corner: "default",
    },
  }
)

function Toggle({
  className,
  variant = "default",
  corner = "default",
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      data-variant={variant}
      className={cn(toggleVariants({ variant, corner }), className)}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
