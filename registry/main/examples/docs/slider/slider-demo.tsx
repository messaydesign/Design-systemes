import { Slider } from "@/registry/main/ui/slider"

export default function SliderDemo() {
  return <Slider defaultValue={[60]} max={100} step={1} thumbLabels={["Volume"]} className="max-w-sm" />
}
