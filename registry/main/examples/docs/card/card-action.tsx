import { Badge } from "@/registry/main/ui/badge"
import { Button } from "@/registry/main/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/registry/main/ui/card"

export default function CardWithAction() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Monthly report</CardTitle>
        <CardDescription>Updated 2 hours ago</CardDescription>
        <CardAction>
          <Button size="sm" variant="ghost">
            Export
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="flex items-center gap-2">
        <span className="font-heading text-3xl font-bold">1,284</span>
        <Badge variant="secondary">+12%</Badge>
      </CardContent>
    </Card>
  )
}
