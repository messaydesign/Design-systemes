import { SearchIcon } from "@/registry/main/ui/icons"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/registry/main/ui/input-group"

export default function InputGroupDemo() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupInput type="search" aria-label="Search projects" placeholder="Search projects" />
    </InputGroup>
  )
}
