import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/*
 * Button Group — Figma "Button Group" (143:3704)
 * Connected Buttons: zero spacing, one 1px seam between segments and
 * rounded outer corners only. Horizontal/Vertical × Default 8 / Soft 16 /
 * Pill, LTR/RTL (logical corners, so RTL mirrors automatically).
 * Focused segments rise above their neighbours so the focus ring stays
 * visible. Not a selection set: use Toggle Group.
 */

const buttonGroupVariants = cva(
  [
    "flex w-fit items-stretch",
    "[&>*]:relative [&>*:focus-visible]:z-10",
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
      { orientation: "horizontal", corner: "default", className: "[&>*:first-child]:rounded-e-none [&>*:first-child]:rounded-s-[var(--radius)] [&>*:last-child]:rounded-s-none [&>*:last-child]:rounded-e-[var(--radius)]" },
      { orientation: "horizontal", corner: "soft", className: "[&>*:first-child]:rounded-e-none [&>*:first-child]:rounded-s-[var(--radius-soft)] [&>*:last-child]:rounded-s-none [&>*:last-child]:rounded-e-[var(--radius-soft)]" },
      { orientation: "horizontal", corner: "pill", className: "[&>*:first-child]:rounded-e-none [&>*:first-child]:rounded-s-full [&>*:last-child]:rounded-s-none [&>*:last-child]:rounded-e-full" },
      { orientation: "vertical", corner: "default", className: "[&>*:first-child]:rounded-b-none [&>*:first-child]:rounded-t-[var(--radius)] [&>*:last-child]:rounded-t-none [&>*:last-child]:rounded-b-[var(--radius)]" },
      { orientation: "vertical", corner: "soft", className: "[&>*:first-child]:rounded-b-none [&>*:first-child]:rounded-t-[var(--radius-soft)] [&>*:last-child]:rounded-t-none [&>*:last-child]:rounded-b-[var(--radius-soft)]" },
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

export { ButtonGroup, buttonGroupVariants }
