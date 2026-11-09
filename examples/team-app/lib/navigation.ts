import type * as React from "react"

/**
 * App navigation. Add a page: create app/<route>/page.tsx, then list it here.
 * `icon` is optional (any icon component from components/ui/icons); the
 * shell shows a file icon when it's missing.
 */
export type NavLink = { href: string; label: string; icon?: React.ComponentType<{ className?: string }> }

export const navigation: { label: string; links: NavLink[] }[] = [
  {
    label: "Workspace",
    links: [
      { href: "/", label: "Overview" },
      { href: "/projects", label: "Projects" },
      { href: "/settings", label: "Settings" },
    ],
  },
]
