"use client"

import * as React from "react"

import { SplitButton, SplitButtonAction, SplitButtonTrigger } from "@/registry/main/ui/split-button"

export default function SplitButtonLoading() {
  const [loading, setLoading] = React.useState(false)
  return (
    <SplitButton loading={loading} aria-label="Deploy options">
      <SplitButtonAction
        loadingText="Deploying"
        onClick={() => {
          setLoading(true)
          window.setTimeout(() => setLoading(false), 2000)
        }}
      >
        Deploy
      </SplitButtonAction>
      <SplitButtonTrigger aria-label="More deploy options" />
    </SplitButton>
  )
}
