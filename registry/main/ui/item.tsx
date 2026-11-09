import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

/*
 * Item — Figma "Item" (142:345)
 * 16px padding & gap: leading media (48px avatar/icon), content (SemiBold title +
 * secondary description, 8px apart) and a trailing action (48px ghost button).
 * Variants: Default · Outline (subtle border) · Muted (muted background).
 */
const itemVariants = cva(
  "flex w-full items-center gap-4 rounded-[var(--radius)] border border-transparent p-[15px] font-sans text-base leading-6 text-foreground",
  {
    variants: {
      variant: {
        default: "",
        outline: "border-[var(--border-subtle)]",
        muted: "bg-[var(--muted-background)]",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

function Item({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof itemVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "div"
  return <Comp data-slot="item" className={cn(itemVariants({ variant }), className)} {...props} />
}

function ItemMedia({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="item-media" className={cn("flex shrink-0 items-center justify-center", className)} {...props} />
}

function ItemContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="item-content" className={cn("flex min-w-0 flex-1 flex-col gap-2", className)} {...props} />
}

function ItemTitle({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="item-title" className={cn("font-semibold", className)} {...props} />
}

function ItemDescription({ className, ...props }: React.ComponentProps<"p">) {
  return <p data-slot="item-description" className={cn("text-[var(--text-secondary)]", className)} {...props} />
}

function ItemActions({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="item-actions" className={cn("flex shrink-0 items-center gap-2", className)} {...props} />
}

function ItemGroup({ className, ...props }: React.ComponentProps<"div">) {
  return <div role="list" data-slot="item-group" className={cn("flex flex-col gap-2", className)} {...props} />
}

export { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle, itemVariants }
