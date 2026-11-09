"use client"

import { Chip } from "@/registry/main/ui/chip"

export default function ChipDisabled() {
  return (
    <ul aria-label="Assigned teams" className="flex flex-wrap gap-2">
      <li>
        <Chip onRemove={() => {}}>Marketing</Chip>
      </li>
      <li>
        {/* Managed by the directory sync, so it can’t be removed here. */}
        <Chip disabled onRemove={() => {}} removeLabel="Remove Everyone (managed by your admin)">
          Everyone
        </Chip>
      </li>
    </ul>
  )
}
