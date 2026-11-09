"use client"

import * as React from "react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/registry/main/ui/accordion"
import { Button } from "@/registry/main/ui/button"

const steps = [
  { value: "details", title: "1. Your details", body: "Name, email address and phone number." },
  { value: "address", title: "2. Delivery address", body: "Where should we send your order?" },
  { value: "payment", title: "3. Payment", body: "Card or bank transfer." },
]

export default function AccordionControlled() {
  const [value, setValue] = React.useState("details")
  const index = steps.findIndex((step) => step.value === value)
  const next = steps[index + 1]

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Accordion type="single" collapsible value={value} onValueChange={setValue}>
        {steps.map((step) => (
          <AccordionItem key={step.value} value={step.value}>
            <AccordionTrigger>{step.title}</AccordionTrigger>
            <AccordionContent>{step.body}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Button className="self-end" disabled={!next} onClick={() => next && setValue(next.value)}>
        Next step
      </Button>
    </div>
  )
}
