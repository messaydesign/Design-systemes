import type { Metadata } from "next"
import Link from "next/link"

import { FormExtrasShowcase } from "@/registry/main/examples/form-extras-showcase"

export const metadata: Metadata = { title: "More form controls playground" }

export default function FormExtrasPage() {
  return (
    <div className="flex flex-col gap-12">
      <header className="flex flex-col gap-2">
        <p className="text-sm text-[var(--text-secondary)]">Playground · all states</p>
        <h1 className="font-heading text-4xl font-bold tracking-tight">More form controls</h1>
        <p className="max-w-2xl text-[var(--text-secondary)]">
          Input Group, Slider, OTP, Chip, Field Set, Counter and Validation Summary — from the Figma
          “03 · Forms” page. <Link href="/docs/playground/forms" className="underline">Back to Forms</Link>
        </p>
      </header>
      <FormExtrasShowcase />
    </div>
  )
}
