import { Card, CardContent, CardHeader } from "@/registry/main/ui/card"
import { Skeleton } from "@/registry/main/ui/skeleton"

export default function SkeletonCard() {
  return (
    <Card role="status" aria-busy="true" aria-label="Loading report" className="w-full max-w-sm">
      <Skeleton className="aspect-video w-full" />
      <CardHeader>
        <Skeleton className="h-5 w-1/2" />
        <Skeleton className="h-4 w-3/4" />
      </CardHeader>
      <CardContent className="flex gap-2">
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-10 w-24" />
      </CardContent>
    </Card>
  )
}
