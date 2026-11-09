import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/registry/main/ui/select"

export default function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-60" aria-label="Fruit">
        <SelectValue placeholder="Choose a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="mango">Mango</SelectItem>
      </SelectContent>
    </Select>
  )
}
