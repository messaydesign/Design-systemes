import Link from "next/link"

import { Button } from "@/registry/main/ui/button"
import { ArrowRightIcon } from "@/registry/main/ui/icons"

export default function ButtonAsLink() {
  return (
    <Button asChild variant="outline">
      <Link href="/docs/components/card">
        Read the Card docs
        <ArrowRightIcon />
      </Link>
    </Button>
  )
}
