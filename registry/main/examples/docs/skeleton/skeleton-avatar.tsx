import { Skeleton } from "@/registry/main/ui/skeleton"

export default function SkeletonAvatar() {
  return (
    <div role="status" aria-busy="true" aria-label="Loading team members" className="flex flex-col gap-4">
      {[0, 1, 2].map((row) => (
        <div key={row} className="flex items-center gap-4">
          <Skeleton className="size-10 rounded-full" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-36" />
            <Skeleton className="h-3 w-24" />
          </div>
        </div>
      ))}
    </div>
  )
}
