import { Separator } from "@/registry/main/ui/separator"

export default function SeparatorSemantic() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 text-sm">
      <p>Terms of service accepted on 3 March 2026.</p>
      {/* A thematic break between unrelated content: exposed to screen readers. */}
      <Separator decorative={false} />
      <p>Privacy settings were last changed on 12 April 2026.</p>
    </div>
  )
}
