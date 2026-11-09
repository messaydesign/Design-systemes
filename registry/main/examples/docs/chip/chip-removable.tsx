"use client"

import * as React from "react"

import { Chip } from "@/registry/main/ui/chip"

const initial = ["Berlin", "Lisbon", "Copenhagen", "Vienna"]

export default function ChipRemovable() {
  const [cities, setCities] = React.useState(initial)
  return (
    <div className="flex flex-col items-start gap-4">
      <ul aria-label="Selected cities" className="flex flex-wrap gap-2">
        {cities.map((city) => (
          <li key={city}>
            <Chip onRemove={() => setCities((prev) => prev.filter((c) => c !== city))}>{city}</Chip>
          </li>
        ))}
      </ul>
      {cities.length === 0 ? (
        <button type="button" className="text-sm underline" onClick={() => setCities(initial)}>
          Reset cities
        </button>
      ) : null}
    </div>
  )
}
