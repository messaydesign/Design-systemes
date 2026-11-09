import { Alert, AlertDescription, AlertTitle } from "@/registry/main/ui/alert"
import { InfoIcon } from "@/registry/main/ui/icons"

export default function AlertDemo() {
  return (
    <Alert className="max-w-md">
      <InfoIcon />
      <AlertTitle>Scheduled maintenance</AlertTitle>
      <AlertDescription>The dashboard will be read-only on Sunday from 02:00 to 03:00 UTC.</AlertDescription>
    </Alert>
  )
}
