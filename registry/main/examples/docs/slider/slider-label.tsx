"use client"

import * as React from "react"

import { Field, FieldMessage, FieldTitle } from "@/registry/main/ui/field"
import { Slider } from "@/registry/main/ui/slider"

export default function SliderLabel() {
  const [value, setValue] = React.useState([25])
  return (
    <Field className="max-w-sm gap-0">
      <div className="flex items-center justify-between">
        {/* The thumb (role="slider") isn’t a labelable element: name it with thumbLabels. */}
        <FieldTitle>Search radius</FieldTitle>
        <output aria-hidden className="text-sm text-muted-foreground tabular-nums">
          {value[0]} km
        </output>
      </div>
      <Slider
        value={value}
        onValueChange={setValue}
        min={5}
        max={100}
        step={5}
        thumbLabels={["Search radius"]}
      />
      <FieldMessage>Show results up to this distance from you.</FieldMessage>
    </Field>
  )
}
