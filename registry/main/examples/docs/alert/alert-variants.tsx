import { Alert, AlertDescription, AlertTitle } from "@/registry/main/ui/alert"

export default function AlertVariants() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Alert>
        <AlertTitle>Default</AlertTitle>
        <AlertDescription>Neutral information with no status.</AlertDescription>
      </Alert>
      <Alert variant="info">
        <AlertTitle>New version available</AlertTitle>
        <AlertDescription>Reload the page to get the latest features.</AlertDescription>
      </Alert>
      <Alert variant="success">
        <AlertTitle>Payment received</AlertTitle>
        <AlertDescription>We’ve emailed your receipt to amina@example.com.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <AlertTitle>Storage almost full</AlertTitle>
        <AlertDescription>You’ve used 9.2 GB of 10 GB. Free up space or upgrade your plan.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertTitle>Couldn’t save changes</AlertTitle>
        <AlertDescription>Check your connection and try again.</AlertDescription>
      </Alert>
    </div>
  )
}
