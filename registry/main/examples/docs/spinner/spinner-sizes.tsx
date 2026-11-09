import { Spinner } from "@/registry/main/ui/spinner"

export default function SpinnerSizes() {
  return (
    <div className="flex items-center gap-6">
      <Spinner size="sm" />
      <Spinner />
      <Spinner size="lg" />
      {/* shadcn style: any size via className */}
      <Spinner className="size-12" />
    </div>
  )
}
