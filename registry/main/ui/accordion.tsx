"use client"

import * as React from "react"
import { Accordion as AccordionPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { ChevronRightIcon } from "@/registry/main/ui/icons"

/*
 * Accordion — Figma "Accordion" (142:493), "Accordion / Item" (142:448)
 * Each item is its own bordered box (subtle border, 8px radius), 8px apart.
 * Trigger: 48px, 16px padding, SemiBold 16/24, chevron right → down when open.
 * Content: 16px inline padding, 16px bottom.
 */
function Accordion({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" className={cn("flex flex-col gap-2", className)} {...props} />
}

function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("rounded-[var(--radius)] border border-[var(--border-subtle)]", className)}
      {...props}
    />
  )
}

function AccordionTrigger({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion flex min-h-12 flex-1 cursor-pointer items-center gap-2 rounded-[var(--radius)] px-4 py-3 text-start font-sans text-base leading-6 font-semibold text-foreground outline-none",
          "focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[var(--button-focus-color)] disabled:pointer-events-none disabled:text-[var(--disabled-text)]",
          className
        )}
        {...props}
      >
        <span className="flex-1">{children}</span>
        <ChevronRightIcon className="size-4 shrink-0 transition-transform duration-150 group-data-[state=open]/accordion:rotate-90 motion-reduce:transition-none" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden font-sans text-base leading-6 text-foreground"
      {...props}
    >
      <div className={cn("px-4 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
