import { Slider } from "@/registry/main/ui/slider"

export default function SliderDisabled() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Slider defaultValue={[40]} disabled thumbLabels={["Brightness (disabled)"]} />
      <Slider defaultValue={[20, 70]} disabled thumbLabels={["Minimum (disabled)", "Maximum (disabled)"]} />
    </div>
  )
}
