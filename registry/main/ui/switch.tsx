"use client"

import * as React from "react"
import { Switch as SwitchPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

/*
 * Switch — Figma ".Building blocks/Switch" (28:1016)
 * 48×32 pill track (also the touch target), 16px thumb 8px from the edge.
 * Focus: brand border plus a neutral 3px backplate.
 */
function Switch({ className, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer group/switch relative inline-flex h-8 w-12 shrink-0 cursor-pointer items-center rounded-full border outline-none",
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
        className="pointer-events-none block size-4 translate-x-[7px] rounded-full bg-[var(--thumb)] transition-[translate,background-color] duration-150 data-[state=checked]:translate-x-[23px] rtl:-translate-x-[7px] rtl:data-[state=checked]:-translate-x-[23px] motion-reduce:transition-none"
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
