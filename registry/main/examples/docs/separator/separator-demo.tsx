import { Separator } from "@/registry/main/ui/separator"

export default function SeparatorDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex flex-col gap-1">
        <p className="font-semibold">Main Brand UI</p>
        <p className="text-sm text-muted-foreground">Components built on Radix and Tailwind.</p>
      </div>
      <Separator />
      <div className="flex h-5 items-center gap-4 text-sm">
        <span>Docs</span>
        <Separator orientation="vertical" />
        <span>Components</span>
        <Separator orientation="vertical" />
        <span>Themes</span>
      </div>
    </div>
  )
}
