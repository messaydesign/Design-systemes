"use client"

import * as React from "react"

import { Checkbox } from "@/registry/main/ui/checkbox"
import { Label } from "@/registry/main/ui/label"

const toppings = ["Tomato", "Mozzarella", "Basil"]

export default function CheckboxIndeterminate() {
  const [selected, setSelected] = React.useState<string[]>(["Tomato"])
  const all = selected.length === toppings.length
  const parent = all ? true : selected.length ? "indeterminate" : false

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1">
        <Checkbox
          id="toppings-all"
          checked={parent}
          aria-controls={toppings.map((t) => `topping-${t}`).join(" ")}
          onCheckedChange={() => setSelected(all ? [] : toppings)}
        />
        <Label htmlFor="toppings-all">All toppings</Label>
      </div>
      <div className="flex flex-col gap-1 ps-8">
        {toppings.map((topping) => (
          <div key={topping} className="flex items-center gap-1">
            <Checkbox
              id={`topping-${topping}`}
              checked={selected.includes(topping)}
              onCheckedChange={(checked) =>
                setSelected((prev) => (checked ? [...prev, topping] : prev.filter((t) => t !== topping)))
              }
            />
            <Label htmlFor={`topping-${topping}`}>{topping}</Label>
          </div>
        ))}
      </div>
    </div>
  )
}
