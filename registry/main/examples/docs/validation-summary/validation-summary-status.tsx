import {
  ValidationSummary,
  ValidationSummaryDescription,
  ValidationSummaryTitle,
} from "@/registry/main/ui/validation-summary"

const statuses = [
  { status: "info", title: "Some fields are pre-filled", description: "We copied your address from your last order." },
  { status: "success", title: "All details look good", description: "You can submit the application." },
  { status: "warning", title: "Check one detail", description: "Your passport expires within 6 months of travel." },
  { status: "error", title: "Fix 1 problem to continue", description: "The postcode doesn’t match the city." },
] as const

export default function ValidationSummaryStatus() {
  return (
    <div className="grid w-full max-w-md gap-4">
      {statuses.map(({ status, title, description }) => (
        <ValidationSummary key={status} status={status}>
          <ValidationSummaryTitle>{title}</ValidationSummaryTitle>
          <ValidationSummaryDescription>{description}</ValidationSummaryDescription>
        </ValidationSummary>
      ))}
    </div>
  )
}
