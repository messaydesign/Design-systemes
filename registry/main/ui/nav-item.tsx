import * as React from "react"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

/*
 * Navigation / Item — Figma (150:61)
 * 48px row, 16px inline padding, 8px gap, 16px leading icon, DM Sans 16/24.
 * States: Default · Hover (surface-hover) · Current (aria-current="page",
 * ghost-selected tint + selected text) · Focus (1px outline, 2px offset) ·
 * Disabled (aria-disabled, disabled text, not interactive).
 * Leading icon is logical: it sits at the inline start in LTR and RTL.
 */

const navItemClasses = cn(
  "relative flex h-12 w-full min-w-0 cursor-pointer items-center gap-2 rounded-[var(--radius)] px-4",
  "font-sans text-base leading-6 md:text-sm md:leading-5 font-normal text-foreground text-start no-underline outline-none",
  "transition-[background-color,color] duration-150",
  "hover:bg-[var(--surface-hover)]",
  "focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[var(--button-focus-color)]",
  "aria-[current=page]:bg-[var(--button-ghost-selected-background)] aria-[current=page]:text-[var(--button-selected-text)]",
  "data-[active]:bg-[var(--button-ghost-selected-background)] data-[active]:text-[var(--button-selected-text)]",
  "aria-disabled:pointer-events-none aria-disabled:cursor-default aria-disabled:text-[var(--disabled-text)]",
  "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  "[&>span]:min-w-0 [&>span]:flex-1 [&>span]:truncate"
)

type NavItemProps = React.ComponentProps<"a"> & {
  /** Render the child element (e.g. Next.js Link) with item styles. */
  asChild?: boolean
  /** Marks the current page (aria-current="page"). */
  isActive?: boolean
  /** Renders as non-interactive text; the href is dropped. */
  disabled?: boolean
}

function NavItem({ className, asChild = false, isActive, disabled, href, ...props }: NavItemProps) {
  const Comp = asChild ? Slot.Root : "a"
  return (
    <Comp
      data-slot="nav-item"
      aria-current={isActive ? "page" : undefined}
      aria-disabled={disabled || undefined}
      href={disabled ? undefined : href}
      tabIndex={disabled ? -1 : undefined}
      className={cn(navItemClasses, className)}
      {...props}
    />
  )
}

export { NavItem, navItemClasses, type NavItemProps }
