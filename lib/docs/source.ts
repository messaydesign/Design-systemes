import "server-only"

import { readFileSync } from "node:fs"
import path from "node:path"
import { codeToHtml } from "shiki"

/** Registry URL shown in install commands. Set REGISTRY_URL when deploying. */
export const REGISTRY_URL = process.env.REGISTRY_URL ?? "http://localhost:3000"

/** Read a repo file (path relative to the project root). */
export function readSource(file: string) {
  return readFileSync(path.join(process.cwd(), file), "utf8")
}

/**
 * Rewrite registry import paths to where the shadcn CLI installs files, so
 * copied code matches the reader's project.
 */
export function toConsumerSource(source: string) {
  return source
    .replaceAll("@/registry/main/ui/", "@/components/ui/")
    .replaceAll("@/registry/main/lib/", "@/lib/")
    .replace(/^\s*\n/, "")
}

/** Syntax-highlight with light and dark themes (switched by the .dark class). */
export async function highlight(code: string, lang = "tsx") {
  // Cached: output depends only on the inputs (Shiki reads the clock internally).
  "use cache"
  return codeToHtml(code, {
    lang,
    themes: { light: "github-light", dark: "github-dark-default" },
    defaultColor: false,
  })
}

type RegistryItem = {
  name: string
  title?: string
  dependencies?: string[]
  registryDependencies?: string[]
  files: { path: string; type: string }[]
}

/** Look up an item in registry.json (the source of truth for installs). */
export function registryItem(name: string): RegistryItem | undefined {
  const registry = JSON.parse(readSource("registry.json")) as { items: RegistryItem[] }
  return registry.items.find((item) => item.name === name)
}
