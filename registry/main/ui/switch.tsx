"use client"

import * as React from "react"
import { Switch as SwitchPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

/*
 * Switch — Figma ".Building blocks/Switch" (28:1016)
 * 48×32 pill track (also the touch target), 16px thumb 8px from the edge.
 * Focus: brand border plus a neutral 3px backplate.
 * Sizes (shadcn names): default = Figma 48×32 / 16px thumb;
 * sm = 36×24 / 12px thumb (3/4 scale) with a 48px invisible touch target.
 */
function Switch({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> & {
  size?: "sm" | "default"
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        "peer group/switch relative inline-flex shrink-0 cursor-pointer items-center rounded-full border outline-none",
        "data-[size=default]:h-8 data-[size=default]:w-12",
        "data-[size=sm]:h-6 data-[size=sm]:w-9 data-[size=sm]:after:absolute data-[size=sm]:after:top-1/2 data-[size=sm]:after:left-1/2 data-[size=sm]:after:size-12 data-[size=sm]:after:-translate-x-1/2 data-[size=sm]:after:-translate-y-1/2",
        "transition-[background-color,border-color,box-shadow] duration-150",
        "border-[var(--border-control)] bg-[var(--input-surface)] [--thumb:var(--icon-secondary)]",
        "hover:bg-accent",
        "focus-visible:border-primary focus-visible:shadow-[0_0_0_3px_var(--selected-background)]",
        "data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:[--thumb:var(--brand-on-primary)]",
        "data-[state=checked]:hover:bg-primary-hover data-[state=checked]:hover:[--thumb:var(--primary-active-foreground)]",
        "data-[state=checked]:active:bg-primary-active data-[state=checked]:active:[--thumb:var(--primary-active-foreground)]",
        "aria-invalid:border-[var(--status-error-border)]",
        "disabled:pointer-events-none disabled:border-[var(--disabled-border)] disabled:bg-[var(--disabled-background)] disabled:[--thumb:var(--disabled-text)]",
        "disabled:data-[state=checked]:border-[var(--disabled-border)] disabled:data-[state=checked]:bg-[var(--disabled-background)] disabled:data-[state=checked]:[--thumb:var(--disabled-text)]",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block rounded-full bg-[var(--thumb)] transition-[translate,background-color] duration-150 motion-reduce:transition-none",
          "group-data-[size=default]/switch:size-4 group-data-[size=default]/switch:translate-x-[7px] group-data-[size=default]/switch:data-[state=checked]:translate-x-[23px]",
          "rtl:group-data-[size=default]/switch:-translate-x-[7px] rtl:group-data-[size=default]/switch:data-[state=checked]:-translate-x-[23px]",
          "group-data-[size=sm]/switch:size-3 group-data-[size=sm]/switch:translate-x-[5px] group-data-[size=sm]/switch:data-[state=checked]:translate-x-[17px]",
          "rtl:group-data-[size=sm]/switch:-translate-x-[5px] rtl:group-data-[size=sm]/switch:data-[state=checked]:-translate-x-[17px]"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
