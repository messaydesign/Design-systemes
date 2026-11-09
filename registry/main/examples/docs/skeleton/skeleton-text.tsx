import { Skeleton } from "@/registry/main/ui/skeleton"

export default function SkeletonText() {
  return (
    <div role="status" aria-busy="true" aria-label="Loading article" className="flex w-full max-w-md flex-col gap-2">
      <Skeleton className="mb-2 h-6 w-2/3" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-4/5" />
    </div>
  )
}
