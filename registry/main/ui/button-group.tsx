import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"
import { Separator } from "@/registry/main/ui/separator"

/*
 * Button Group — Figma "Button Group" (143:3704)
 * Connected Buttons: zero spacing, one 1px seam between segments and
 * rounded outer corners only. Horizontal/Vertical × Default 8 / Soft 16 /
 * Pill, LTR/RTL (logical corners, so RTL mirrors automatically).
 * Focused segments rise above their neighbours so the focus ring stays
 * visible. Not a selection set: use Toggle Group.
 *
 * shadcn parts: ButtonGroupText (a static label segment, `asChild` supported)
 * and ButtonGroupSeparator (a visible 1px divider, vertical by default).
 * Nested groups are spaced 8px apart, as in shadcn.
 */

const buttonGroupVariants = cva(
  [
    "flex w-fit items-stretch has-[>[data-slot=button-group]]:gap-2",
    "[&>*]:relative [&>*:focus-visible]:z-10",
    "[&>input]:flex-1 [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit",
    // Higher specificity than a Button's own corner class.
    "[&>*:not(:first-child):not(:last-child)]:rounded-none",
  ],
  {
    variants: {
      orientation: {
        // One shared 1px seam: later segments drop their leading border and
        // get that pixel back as padding, so each segment is as wide as in
        // Figma (strokes drawn inside). Heights are fixed, so vertical
        // segments only drop the top border.
        horizontal: [
          "[&>*:not(:first-child)]:border-s-0",
          "[&>[data-size=xs]:not(:first-child)]:ps-2 [&>[data-size=sm]:not(:first-child)]:ps-4",
          "[&>[data-size=default]:not(:first-child)]:ps-6 [&>[data-size=lg]:not(:first-child)]:ps-6",
          "[&>[data-size=xl]:not(:first-child)]:ps-8",
        ],
        vertical: "flex-col [&>*:not(:first-child)]:border-t-0",
      },
      corner: {
        default: "",
        soft: "",
        pill: "",
      },
    },
    compoundVariants: [
      { orientation: "horizontal", corner: "default", className: "[&>*:first-child]:rounded-e-none [&>*:first-child]:rounded-s-lg [&>*:last-child]:rounded-s-none [&>*:last-child]:rounded-e-lg" },
      { orientation: "horizontal", corner: "soft", className: "[&>*:first-child]:rounded-e-none [&>*:first-child]:rounded-s-xl [&>*:last-child]:rounded-s-none [&>*:last-child]:rounded-e-xl" },
      { orientation: "horizontal", corner: "pill", className: "[&>*:first-child]:rounded-e-none [&>*:first-child]:rounded-s-full [&>*:last-child]:rounded-s-none [&>*:last-child]:rounded-e-full" },
      { orientation: "vertical", corner: "default", className: "[&>*:first-child]:rounded-b-none [&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-t-none [&>*:last-child]:rounded-b-lg" },
      { orientation: "vertical", corner: "soft", className: "[&>*:first-child]:rounded-b-none [&>*:first-child]:rounded-t-xl [&>*:last-child]:rounded-t-none [&>*:last-child]:rounded-b-xl" },
      { orientation: "vertical", corner: "pill", className: "[&>*:first-child]:rounded-b-none [&>*:first-child]:rounded-t-[24px] [&>*:last-child]:rounded-t-none [&>*:last-child]:rounded-b-[24px]" },
    ],
    defaultVariants: {
      orientation: "horizontal",
      corner: "default",
    },
  }
)

function ButtonGroup({
  className,
  orientation = "horizontal",
  corner = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof buttonGroupVariants>) {
  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      className={cn(buttonGroupVariants({ orientation, corner }), className)}
      {...props}
    />
  )
}

function ButtonGroupText({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot.Root : "div"
  return (
    <Comp
      data-slot="button-group-text"
      className={cn(
        "flex items-center gap-2 rounded-lg border border-border bg-muted px-[15px]",
        "font-sans text-base leading-6 md:text-sm md:leading-5 font-medium text-foreground",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function ButtonGroupSeparator({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="button-group-separator"
      orientation={orientation}
      className={cn("relative m-0! self-stretch bg-input data-[orientation=vertical]:h-auto", className)}
      {...props}
    />
  )
}

export { ButtonGroup, ButtonGroupSeparator, ButtonGroupText, buttonGroupVariants }
