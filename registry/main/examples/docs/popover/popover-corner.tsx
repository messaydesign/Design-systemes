import { Button } from "@/registry/main/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/main/ui/popover"

// Figma Corner: Default (8px), Soft (16px) and Pill — keep pill to one short line.
export default function PopoverCorner() {
  return (
    <div className="flex flex-wrap gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Default</Button>
        </PopoverTrigger>
        <PopoverContent className="w-72" aria-labelledby="popover-default-title">
          <PopoverHeader>
            <PopoverTitle id="popover-default-title">Default corner</PopoverTitle>
            <PopoverDescription>8px radius for most content.</PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Soft</Button>
        </PopoverTrigger>
        <PopoverContent corner="soft" className="w-72" aria-labelledby="popover-soft-title">
          <PopoverHeader>
            <PopoverTitle id="popover-soft-title">Soft corner</PopoverTitle>
            <PopoverDescription>16px radius for friendlier, roomier panels.</PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Pill</Button>
        </PopoverTrigger>
        <PopoverContent corner="pill" className="w-auto px-6" aria-label="Link copied">
          <p>Link copied to your clipboard.</p>
        </PopoverContent>
      </Popover>
    </div>
  )
}
