"use client"

import { Progress } from "@/registry/main/ui/progress"

export default function ProgressLabel() {
  const done = 3
  const total = 5
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex items-baseline justify-between gap-4 text-sm">
        <span id="onboarding-label" className="font-medium">
          Profile setup
        </span>
        <span className="text-muted-foreground">
          {done} of {total} steps
        </span>
      </div>
      <Progress
        value={(done / total) * 100}
        aria-labelledby="onboarding-label"
        getValueLabel={() => `${done} of ${total} steps`}
      />
    </div>
  )
}
