import Link from "next/link"

import { FormExtrasShowcase } from "@/registry/main/examples/form-extras-showcase"

export default function FormExtrasPage() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-12 sm:px-8">
      <header className="flex flex-col gap-2">
        <p className="text-sm text-muted-foreground">Main Brand UI · Phase 7</p>
        <h1 className="text-4xl font-bold tracking-tight">More form controls</h1>
        <p className="max-w-2xl text-muted-foreground">
          Input Group, Slider, OTP, Chip, Field Set, Counter and Validation Summary — from the Figma
          “03 · Forms” page. <Link href="/forms" className="underline">Back to Forms</Link>
        </p>
      </header>
      <FormExtrasShowcase />
    </main>
  )
}
