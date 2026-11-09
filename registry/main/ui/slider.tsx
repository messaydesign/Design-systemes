"use client"

import * as React from "react"
import { Slider as SliderPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

/*
 * Slider — Figma "Slider" (136:2047), Single/Range × Default/Focus/Disabled.
 * 48px interaction area, 8px pill track (disabled-background), brand-primary
 * fill, 24px thumb (surface fill, 1px input outline) with a 48px hit area.
 * Focus: 1px ring with a 2px offset. Disabled: grey fill, disabled stroke.
 * Radix provides arrows/Home/End/Page keys, ordered range thumbs and RTL.
 * Pass aria-label / aria-labelledby (applied to the thumb), or thumbLabels
 * for ranges, and show the value as text.
 */

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  thumbLabels,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root> & {
  /** Accessible names per thumb, e.g. ["Minimum", "Maximum"]. */
  thumbLabels?: string[]
}) {
  const values = React.useMemo(
    () => (Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min]),
    [value, defaultValue, min]
  )

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex h-12 w-full touch-none items-center select-none data-[disabled]:pointer-events-none",
        "data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-12 data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className="relative grow overflow-hidden rounded-full bg-[var(--disabled-background)] data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2"
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className="absolute rounded-full bg-primary data-[disabled]:bg-[var(--disabled-text)] data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
        />
      </SliderPrimitive.Track>
      {values.map((_, index) => (
        <SliderPrimitive.Thumb
          key={index}
          data-slot="slider-thumb"
          // Radix renders role="slider" on each thumb, so names go there.
          aria-label={thumbLabels?.[index] ?? (values.length === 1 ? ariaLabel : undefined)}
          aria-labelledby={thumbLabels?.[index] ? undefined : ariaLabelledBy}
          aria-describedby={ariaDescribedBy}
          className={cn(
            "relative block size-6 shrink-0 cursor-grab rounded-full border border-input bg-[var(--input-surface)] outline-none active:cursor-grabbing",
            "after:absolute after:top-1/2 after:left-1/2 after:size-12 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full",
            "focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-ring",
            "data-[disabled]:border-[var(--disabled-border)]"
          )}
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider }
