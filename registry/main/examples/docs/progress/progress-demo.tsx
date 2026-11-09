"use client"

import * as React from "react"

import { Progress } from "@/registry/main/ui/progress"

export default function ProgressDemo() {
  const [value, setValue] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setValue(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={value} aria-label="Upload progress" className="w-3/5" />
}
