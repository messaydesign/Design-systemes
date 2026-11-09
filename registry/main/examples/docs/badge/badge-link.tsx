import Link from "next/link"

import { Badge } from "@/registry/main/ui/badge"

export default function BadgeAsLink() {
  return (
    <Badge
      asChild
      variant="outline"
      className="hover:bg-accent focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <Link href="/docs/components/badge#as-a-link">Design</Link>
    </Badge>
  )
}
