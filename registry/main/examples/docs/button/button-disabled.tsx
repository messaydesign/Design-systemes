import { Button } from "@/registry/main/ui/button"

export default function ButtonDisabled() {
  return (
    <>
      <Button disabled>Primary</Button>
      <Button variant="secondary" disabled>Secondary</Button>
      <Button variant="outline" disabled>Outline</Button>
      <Button variant="destructive" disabled>Delete</Button>
    </>
  )
}
