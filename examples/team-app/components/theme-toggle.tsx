"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
  return () => observer.disconnect()
}
const isDark = () => document.documentElement.classList.contains("dark")

/** Light/dark switch. The choice is saved per browser; see THEME_SCRIPT in app/layout.tsx. */
export function ThemeToggle() {
  const dark = React.useSyncExternalStore(subscribe, isDark, () => false)
  return (
    <Button
      variant="ghost"
      size="sm"
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => {
        document.documentElement.classList.toggle("dark", !dark)
        try {
          localStorage.setItem("theme", dark ? "light" : "dark")
        } catch {}
      }}
    >
      {dark ? "Light" : "Dark"}
    </Button>
  )
}
