import { Alert, AlertDescription, AlertTitle } from "@/registry/main/ui/alert"

export default function AlertOutline() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Alert appearance="outline" variant="info">
        <AlertTitle>New version available</AlertTitle>
        <AlertDescription>Reload the page to get the latest features.</AlertDescription>
      </Alert>
      <Alert appearance="outline" variant="success">
        <AlertTitle>Payment received</AlertTitle>
        <AlertDescription>We’ve emailed your receipt.</AlertDescription>
      </Alert>
      <Alert appearance="outline" variant="warning">
        <AlertTitle>Storage almost full</AlertTitle>
        <AlertDescription>You’ve used 9.2 GB of 10 GB.</AlertDescription>
      </Alert>
      <Alert appearance="outline" variant="destructive">
        <AlertTitle>Couldn’t save changes</AlertTitle>
        <AlertDescription>Check your connection and try again.</AlertDescription>
      </Alert>
    </div>
  )
}
