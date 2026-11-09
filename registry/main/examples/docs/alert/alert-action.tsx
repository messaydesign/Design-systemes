import { Alert, AlertDescription, AlertTitle } from "@/registry/main/ui/alert"
import { Button } from "@/registry/main/ui/button"

export default function AlertAction() {
  return (
    <Alert variant="warning" className="max-w-md">
      <AlertTitle>Your trial ends in 3 days</AlertTitle>
      <AlertDescription>Add a payment method to keep your projects and data.</AlertDescription>
      <div className="flex gap-2">
        <Button size="sm">Add payment method</Button>
        <Button size="sm" variant="ghost">
          Remind me later
        </Button>
      </div>
    </Alert>
  )
}
