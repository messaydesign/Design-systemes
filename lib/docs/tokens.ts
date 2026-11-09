import "server-only"

import { readSource } from "@/lib/docs/source"

/** Parse custom properties from a top-level block of app/globals.css. */
function block(css: string, selector: string) {
  const re = new RegExp(`(^|\\n)${selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*\\{([\\s\\S]*?)\\n\\}`)
  const body = css.match(re)?.[2] ?? ""
  const out: { name: string; value: string; comment?: string }[] = []
  for (const line of body.split("\n")) {
    const m = line.match(/^\s*--([\w-]+):\s*([^;]+);\s*(?:\/\*\s*(.*?)\s*\*\/)?/)
    if (m) out.push({ name: m[1], value: m[2].trim(), comment: m[3] })
  }
  return out
}

export function readTokens() {
  const css = readSource("app/globals.css")
  const light = block(css, ":root")
  const dark = new Map(block(css, ".dark").map((t) => [t.name, t]))
  return light.map((t) => ({ ...t, dark: dark.get(t.name)?.value, darkComment: dark.get(t.name)?.comment }))
}
