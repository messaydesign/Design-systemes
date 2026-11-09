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
 * Sizes (shadcn names): sm 40 · default 48 · lg 56.
 * Selected = Ghost Selected tint + border (Default) or selected border (Outline).
 * Hover/Pressed on a selected toggle show the neutral hover/pressed face,
 * as in the Figma masters. Radix sets aria-pressed and data-state="on".
 * Swap the icon for a meaningful symbol; keep a non-colour selected cue.
 */

const toggleVariants = cva(
  "",
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
      // Heights match Button: sm = Small 40 · default = Large 48 · lg = XL 56.
      // Padding keeps an icon-only toggle square (Figma value minus the 1px border).
      // Text toggles use the Button type style (14/20, 16/24 below 768px) and an 8px icon gap.
      size: {
        sm: "h-10 min-w-10 gap-2 px-[11px] text-base leading-6 md:text-sm md:leading-5 [&_svg:not([class*='size-'])]:size-4 after:absolute after:inset-x-0 after:top-1/2 after:h-12 after:min-w-12 after:-translate-y-1/2",
        default: "h-12 min-w-12 gap-2 px-[11px] text-base leading-6 md:text-sm md:leading-5 [&_svg:not([class*='size-'])]:size-6",
        lg: "h-14 min-w-14 gap-2 px-[15px] text-base leading-6 md:text-sm md:leading-5 [&_svg:not([class*='size-'])]:size-6",
      },
      corner: {
        default: "rounded-lg",
        soft: "rounded-xl",
        pill: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      corner: "default",
    },
  }
)

function Toggle({
  className,
  variant = "default",
  size = "default",
  corner = "default",
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      data-variant={variant}
      data-size={size}
      className={cn(toggleVariants({ variant, size, corner }), className)}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
