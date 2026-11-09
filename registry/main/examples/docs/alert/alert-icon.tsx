import { Alert, AlertDescription, AlertTitle } from "@/registry/main/ui/alert"
import { FileIcon } from "@/registry/main/ui/icons"

export default function AlertIcon() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Alert variant="info" icon={<FileIcon />}>
        <AlertTitle>Import ready</AlertTitle>
        <AlertDescription>customers.csv has 1,204 rows. Review them before importing.</AlertDescription>
      </Alert>
      <Alert variant="success" icon={null}>
        <AlertTitle>No icon</AlertTitle>
        <AlertDescription>Pass icon={"{null}"} to hide the status icon when space is tight.</AlertDescription>
      </Alert>
    </div>
  )
}
