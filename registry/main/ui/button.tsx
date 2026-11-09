"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"
import { SpinnerIcon } from "@/registry/main/ui/icons"

/*
 * Button — Figma "Button / Adaptive" (127:386)
 *   Corner  (127:386)  Default 8 · Soft 16 · Pill
 *   Appearance (127:352) Variant × State
 *     Primary · Secondary · Outline · Ghost · Destructive · Link
 *     Default · Hover · Pressed (:active) · Selected (persistent) · Disabled
 *   Content (125:168)  Size × Content × Loading
 *     XXL 64 · XL 56 · Large 48 · Small 40 · XS 32, label+icons or icon only
 *
 * Size names follow shadcn so existing blocks keep working:
 *   xs = XS 32 · sm = Small 40 · default = Large 48 · lg = XL 56 · xl = XXL 64
 *
 * Selected is driven by aria-pressed="true", aria-current="page" or
 * data-state="on" (the `selected` prop sets aria-pressed for you).
 */

const buttonVariants = cva(
  [
    "group/button relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none",
    "border border-transparent font-button font-semibold",
    "transition-[color,background-color,border-color,box-shadow] duration-150",
    "focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-ring",
    "disabled:pointer-events-none aria-disabled:pointer-events-none",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-[var(--button-primary-default-background)] text-[var(--button-primary-default-text)]",
          "hover:bg-[var(--button-primary-hover-background)] hover:text-[var(--button-primary-active-text)]",
          "active:bg-[var(--button-primary-pressed-background)] active:text-[var(--button-primary-active-text)] active:shadow-[inset_0_1px_2px_-1px_var(--effect-pressed-inner)]",
          "selected:bg-[var(--button-primary-selected-background)] selected:text-[var(--button-primary-active-text)]",
          "disabled:bg-[var(--button-disabled-background)] disabled:text-[var(--button-disabled-text)]",
          "aria-disabled:bg-[var(--button-disabled-background)] aria-disabled:text-[var(--button-disabled-text)]",
        ],
        secondary: [
          "border-[var(--button-secondary-default-border)] bg-[var(--button-secondary-default-background)] text-[var(--button-neutral-text)]",
          "hover:bg-[var(--button-secondary-hover-background)]",
          "active:bg-[var(--button-secondary-pressed-background)] active:shadow-[inset_0_1px_2px_-1px_var(--effect-pressed-inner)]",
          "selected:border-[var(--button-secondary-selected-border)] selected:bg-[var(--button-secondary-selected-background)] selected:text-[var(--button-selected-text)]",
          "disabled:border-[var(--border-disabled)] disabled:bg-[var(--button-disabled-background)] disabled:text-[var(--button-disabled-text)]",
          "aria-disabled:border-[var(--border-disabled)] aria-disabled:bg-[var(--button-disabled-background)] aria-disabled:text-[var(--button-disabled-text)]",
        ],
        outline: [
          "border-[var(--button-outline-default-border)] bg-transparent text-[var(--button-neutral-text)]",
          "hover:border-[var(--button-outline-hover-border)]",
          "active:border-[var(--button-outline-pressed-border)]",
          "selected:border-[var(--button-secondary-selected-border)] selected:text-[var(--button-selected-text)]",
          "disabled:border-[var(--border-disabled)] disabled:text-[var(--button-disabled-text)]",
          "aria-disabled:border-[var(--border-disabled)] aria-disabled:text-[var(--button-disabled-text)]",
        ],
        ghost: [
          "bg-transparent text-[var(--button-neutral-text)]",
          "hover:bg-[var(--button-ghost-hover-background)]",
          "active:bg-[var(--button-ghost-pressed-background)] active:shadow-[inset_0_1px_2px_-1px_var(--effect-pressed-inner)]",
          "selected:border-[var(--button-ghost-selected-border)] selected:bg-[var(--button-ghost-selected-background)] selected:text-[var(--button-selected-text)]",
          "disabled:text-[var(--button-disabled-text)] aria-disabled:text-[var(--button-disabled-text)]",
        ],
        destructive: [
          "border-[var(--button-destructive-default-border)] bg-[var(--button-destructive-default-background)] text-[var(--button-destructive-default-text)]",
          "hover:bg-[var(--button-destructive-hover-background)] hover:text-[var(--button-destructive-active-text)]",
          "active:bg-[var(--button-destructive-pressed-background)] active:text-[var(--button-destructive-active-text)] active:shadow-[inset_0_1px_2px_-1px_var(--effect-pressed-inner)]",
          "selected:bg-[var(--button-destructive-selected-background)] selected:text-[var(--button-destructive-active-text)]",
          "disabled:border-[var(--border-disabled)] disabled:bg-[var(--button-disabled-background)] disabled:text-[var(--button-disabled-text)]",
          "aria-disabled:border-[var(--border-disabled)] aria-disabled:bg-[var(--button-disabled-background)] aria-disabled:text-[var(--button-disabled-text)]",
        ],
        link: [
          "bg-transparent text-[var(--button-link-default-text)] underline decoration-from-font underline-offset-auto",
          "hover:text-[var(--button-link-hover-text)]",
          "active:text-[var(--button-link-pressed-text)]",
          "selected:text-[var(--button-link-selected-text)]",
          "disabled:text-[var(--button-disabled-text)] aria-disabled:text-[var(--button-disabled-text)]",
        ],
      },
      // Horizontal padding is Figma's value minus the 1px border, because
      // Figma strokes sit inside the frame (XS 8 · Small 16 · Large 24 · XL 24 · XXL 32).
      size: {
        xs: "h-8 gap-2 px-[7px] text-xs leading-6 [&_svg:not([class*='size-'])]:size-4",
        sm: "h-10 gap-2 px-[15px] text-sm leading-6 [&_svg:not([class*='size-'])]:size-4",
        default: "h-12 gap-2 px-[23px] text-base leading-6 [&_svg:not([class*='size-'])]:size-6",
        lg: "h-14 gap-4 px-[23px] text-lg leading-6 [&_svg:not([class*='size-'])]:size-6",
        xl: "h-16 gap-4 px-[31px] text-xl leading-6 [&_svg:not([class*='size-'])]:size-6",
        "icon-xs": "size-8 [&_svg:not([class*='size-'])]:size-4",
        "icon-sm": "size-10 [&_svg:not([class*='size-'])]:size-4",
        icon: "size-12 [&_svg:not([class*='size-'])]:size-6",
        "icon-lg": "size-14 [&_svg:not([class*='size-'])]:size-6",
        "icon-xl": "size-16 [&_svg:not([class*='size-'])]:size-6",
      },
      corner: {
        default: "rounded-lg",
        soft: "rounded-xl",
        pill: "rounded-full",
      },
    },
    compoundVariants: [
      // 48px minimum touch target around faces smaller than 48px.
      {
        size: ["xs", "sm"],
        className:
          "after:absolute after:inset-x-0 after:top-1/2 after:h-12 after:min-w-12 after:-translate-y-1/2",
      },
      {
        size: ["icon-xs", "icon-sm"],
        className:
          "after:absolute after:top-1/2 after:left-1/2 after:size-12 after:-translate-x-1/2 after:-translate-y-1/2",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      corner: "default",
    },
  }
)

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    /** Render the child element (e.g. a link) with button styles. Loading is ignored. */
    asChild?: boolean
    /** Persistent selected state. Sets aria-pressed. */
    selected?: boolean
    /** Busy state. Keeps width, shows a spinner, blocks repeat activation. */
    loading?: boolean
    /** Optional visible text next to the spinner while loading. */
    loadingText?: string
  }

function Button({
  className,
  variant = "default",
  size = "default",
  corner = "default",
  asChild = false,
  selected,
  loading = false,
  loadingText,
  onClick,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size, corner, className }))

  if (asChild) {
    return (
      <Slot.Root
        data-slot="button"
        data-variant={variant}
        data-size={size}
        aria-pressed={selected}
        className={classes}
        {...props}
      >
        {children}
      </Slot.Root>
    )
  }

  return (
    <button
      type="button"
      data-slot="button"
      data-variant={variant}
      data-size={size}
      aria-pressed={selected}
      aria-busy={loading || undefined}
      className={classes}
      onClick={(event) => {
        if (loading) {
          event.preventDefault()
          return
        }
        onClick?.(event)
      }}
      {...props}
    >
      <span
        data-slot="button-content"
        className="inline-flex items-center justify-center gap-[inherit] group-aria-busy/button:opacity-0"
      >
        {children}
      </span>
      {loading && (
        <span
          data-slot="button-busy"
          className="absolute inset-0 inline-flex items-center justify-center gap-2"
        >
          <SpinnerIcon className="size-4" />
          {loadingText ? (
            <span>{loadingText}</span>
          ) : (
            <span className="sr-only">Loading</span>
          )}
        </span>
      )}
    </button>
  )
}

export { Button, buttonVariants, type ButtonProps }
