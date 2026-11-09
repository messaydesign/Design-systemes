import { Card, CardDescription, CardHeader, CardTitle } from "@/registry/main/ui/card"

export default function CardCorners() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Default</CardTitle>
          <CardDescription>8px corners.</CardDescription>
        </CardHeader>
      </Card>
      <Card corner="soft">
        <CardHeader>
          <CardTitle>Soft</CardTitle>
          <CardDescription>16px corners.</CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}
