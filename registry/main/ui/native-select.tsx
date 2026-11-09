import * as React from "react"

import { cn } from "@/lib/utils"
import { ChevronDownIcon } from "@/registry/main/ui/icons"

/*
 * Native Select — Figma "Native Select" (136:1957)
 * A real <select> styled like the Select control; best on mobile.
 * shadcn API: `size` "sm" | "default" (replaces the native numeric `size`
 * attribute, as in shadcn). Figma has a single 32px control height, so both
 * sizes are 32px today. Extra: `shape`.
 */
function NativeSelect({
  className,
  size = "default",
  shape = "default",
  ...props
}: Omit<React.ComponentProps<"select">, "size"> & {
  size?: "sm" | "default"
  shape?: "default" | "rounded"
}) {
  return (
    <div data-slot="native-select-wrapper" className="group/native-select relative w-full">
      <select
        data-slot="native-select"
        data-size={size}
        className={cn(
          "flex h-8 w-full min-w-0 cursor-pointer appearance-none border border-input bg-[var(--input-surface)] ps-[7px] pe-8",
          "font-sans text-base leading-6 md:text-sm md:leading-5 text-foreground",
          "transition-[color,background-color,border-color] duration-150 outline-none",
          "hover:border-[var(--input-outline-hover)] hover:bg-accent",
          "focus-visible:border-[var(--input-outline-focus)] focus-visible:bg-[var(--input-surface)]",
          "aria-invalid:border-[var(--status-error-border)]",
          "disabled:cursor-not-allowed disabled:border-[var(--disabled-border)] disabled:bg-[var(--input-surface-disabled)] disabled:text-[var(--disabled-text)]",
          shape === "rounded" ? "rounded-[var(--radius-input-pill)] ps-[15px]" : "rounded-lg",
          className
        )}
        {...props}
      />
      <ChevronDownIcon
        data-slot="native-select-icon"
        className="pointer-events-none absolute end-2 top-1/2 size-4 -translate-y-1/2 text-muted-foreground group-has-disabled/native-select:text-[var(--disabled-text)]"
      />
    </div>
  )
}

function NativeSelectOption(props: React.ComponentProps<"option">) {
  return <option data-slot="native-select-option" {...props} />
}

function NativeSelectOptGroup(props: React.ComponentProps<"optgroup">) {
  return <optgroup data-slot="native-select-optgroup" {...props} />
}

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption }
