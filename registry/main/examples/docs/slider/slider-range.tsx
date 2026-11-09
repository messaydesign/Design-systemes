"use client"

import * as React from "react"

import { Slider } from "@/registry/main/ui/slider"

const format = (value: number) => `€${value}`

export default function SliderRange() {
  const [range, setRange] = React.useState([20, 80])
  return (
    <div className="flex w-full max-w-sm flex-col">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">Price</span>
        <span className="text-muted-foreground tabular-nums">
          {format(range[0])} – {format(range[1])}
        </span>
      </div>
      <Slider
        value={range}
        onValueChange={setRange}
        min={0}
        max={200}
        step={10}
        minStepsBetweenThumbs={1}
        thumbLabels={["Minimum price", "Maximum price"]}
      />
    </div>
  )
}
