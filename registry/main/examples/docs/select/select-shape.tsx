import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/registry/main/ui/select"

export default function SelectShape() {
  return (
    <Select defaultValue="weekly">
      <SelectTrigger shape="rounded" className="w-60" aria-label="Frequency">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="daily">Daily</SelectItem>
        <SelectItem value="weekly">Weekly</SelectItem>
        <SelectItem value="monthly">Monthly</SelectItem>
      </SelectContent>
    </Select>
  )
}
