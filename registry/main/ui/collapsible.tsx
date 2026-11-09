"use client"

import { Collapsible as CollapsiblePrimitive } from "radix-ui"

/*
 * Collapsible — Figma "Collapsible" (142:558)
 * Compose with an outline <Button> trigger + ChevronDownIcon and any content;
 * stack with an 8px gap (see the preview).
 */
const Collapsible = CollapsiblePrimitive.Root
const CollapsibleTrigger = CollapsiblePrimitive.Trigger
const CollapsibleContent = CollapsiblePrimitive.Content

export { Collapsible, CollapsibleContent, CollapsibleTrigger }
