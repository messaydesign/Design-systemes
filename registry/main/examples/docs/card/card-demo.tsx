import { Button } from "@/registry/main/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/registry/main/ui/card"
import { Field, FieldControl, FieldLabel } from "@/registry/main/ui/field"
import { Input } from "@/registry/main/ui/input"

export default function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Name it now; you can change it later.</CardDescription>
      </CardHeader>
      <CardContent>
        <Field>
          <FieldLabel htmlFor="project-name">Project name</FieldLabel>
          <FieldControl>
            <Input id="project-name" placeholder="Website redesign" />
          </FieldControl>
        </Field>
      </CardContent>
      <CardFooter>
        <Button variant="outline">Cancel</Button>
        <Button>Create</Button>
      </CardFooter>
    </Card>
  )
}
