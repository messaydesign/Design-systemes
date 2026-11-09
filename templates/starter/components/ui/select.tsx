"use client"

import * as React from "react"
import { Select as SelectPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { CheckIcon, ChevronDownIcon } from "@/components/ui/icons"

/*
 * Select — Figma "Select" (136:1686), ".Building blocks/Select control" (27:1956),
 * "Option List" (31:284) and "Forms/Option" (30:20).
 * Listbox semantics (not an action menu); keyboard, typeahead and focus return
 * come from Radix Select.
 *
 * shadcn API: SelectTrigger `size` "sm" | "default". Figma has a single 32px
 * control height, so both sizes are 32px today; `size` is accepted (and exposed
 * as data-size) so shadcn examples work and a smaller step can be added later.
 * Extras: `shape` on the trigger, `showCheck` on items (shadcn always shows it).
 */

function Select(props: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup(props: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue(props: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  size = "default",
  shape = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default"
  shape?: "default" | "rounded"
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        // data-[size=sm] and data-[size=default] are both 32px (Figma has one size).
        "group/select flex h-8 w-full min-w-0 cursor-pointer items-center justify-between gap-2 border border-input bg-[var(--input-surface)] px-[7px] text-start",
        "font-sans text-base leading-6 md:text-sm md:leading-5 text-foreground data-[placeholder]:text-[var(--input-placeholder)]",
        "transition-[color,background-color,border-color] duration-150 outline-none",
        "hover:border-[var(--input-outline-hover)] hover:bg-accent",
        "focus-visible:border-[var(--input-outline-focus)] focus-visible:bg-[var(--input-surface)]",
        "data-[state=open]:border-[var(--input-outline-focus)] data-[state=open]:bg-[var(--input-surface)]",
        "aria-invalid:border-[var(--status-error-border)]",
        "disabled:pointer-events-none disabled:border-[var(--disabled-border)] disabled:bg-[var(--input-surface-disabled)] disabled:text-[var(--disabled-text)]",
        "[&>span]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2",
        shape === "rounded" ? "rounded-[var(--radius-input-pill)] px-[15px]" : "rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon className="flex shrink-0 text-muted-foreground transition-transform duration-150 group-data-[state=open]/select:rotate-180 group-disabled/select:text-[var(--disabled-text)]">
        <ChevronDownIcon className="size-4" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = "popper",
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        position={position}
        sideOffset={sideOffset}
        className={cn(
          "relative z-50 max-h-(--radix-select-content-available-height) min-w-32 overflow-hidden",
          "rounded-lg border border-[var(--border-control)] bg-popover text-foreground shadow-[0_2px_8px_0_var(--effect-outer)]",
          position === "popper" && "w-full min-w-(--radix-select-trigger-width)",
          className
        )}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport className="flex flex-col gap-2 p-[7px]">{children}</SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("font-sans text-sm leading-6 md:leading-5 font-medium text-muted-foreground", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  showCheck = false,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item> & {
  /** Figma "Selected mark": trailing check on the selected option. */
  showCheck?: boolean
}) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "relative flex h-8 w-full cursor-pointer items-center gap-2 rounded-lg border border-transparent px-[7px] select-none",
        "font-sans text-base leading-6 md:text-sm md:leading-5 text-foreground outline-none transition-colors duration-100",
        "data-[highlighted]:bg-accent",
        "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        "data-[state=checked]:data-[highlighted]:bg-primary-hover data-[state=checked]:data-[highlighted]:text-[var(--primary-active-foreground)]",
        "data-[disabled]:pointer-events-none data-[disabled]:bg-[var(--disabled-background)] data-[disabled]:text-[var(--disabled-text)]",
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      {showCheck ? (
        <SelectPrimitive.ItemIndicator className="ms-auto">
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      ) : null}
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("-mx-2 h-px bg-border", className)}
      {...props}
    />
  )
}

const scrollButtonClass =
  "flex h-8 cursor-default items-center justify-center text-muted-foreground [&_svg:not([class*='size-'])]:size-4"

function SelectScrollUpButton({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(scrollButtonClass, className)}
      {...props}
    >
      <ChevronDownIcon className="rotate-180" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(scrollButtonClass, className)}
      {...props}
    >
      <ChevronDownIcon />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
