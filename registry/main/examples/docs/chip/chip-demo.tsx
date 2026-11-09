import { Chip } from "@/registry/main/ui/chip"

export default function ChipDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Chip>Design</Chip>
      <Chip>Engineering</Chip>
      <Chip>Research</Chip>
    </div>
  )
}
