import type { Metadata } from "next"

import { PageHeader } from "@/components/patterns/page-header"
import { SettingsForm } from "./settings-form"

export const metadata: Metadata = { title: "Settings" }

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Settings" description="Workspace preferences." />
      <SettingsForm />
    </div>
  )
}
