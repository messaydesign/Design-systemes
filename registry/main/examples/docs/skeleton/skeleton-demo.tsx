import { Skeleton } from "@/registry/main/ui/skeleton"

export default function SkeletonDemo() {
  return (
    <div role="status" aria-busy="true" aria-label="Loading profile" className="flex items-center gap-4">
      <Skeleton className="size-12 rounded-full" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-4 w-32" />
      </div>
    </div>
  )
}
