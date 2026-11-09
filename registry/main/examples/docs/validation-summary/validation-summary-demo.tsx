import {
  ValidationSummary,
  ValidationSummaryList,
  ValidationSummaryTitle,
} from "@/registry/main/ui/validation-summary"

export default function ValidationSummaryDemo() {
  return (
    <ValidationSummary status="error" aria-labelledby="summary-demo-title" className="max-w-md">
      <ValidationSummaryTitle id="summary-demo-title">There are 2 problems with your details</ValidationSummaryTitle>
      <ValidationSummaryList>
        <li>
          <a href="#summary-demo-email">Enter an email like name@example.com</a>
        </li>
        <li>
          <a href="#summary-demo-phone">Enter a phone number with a country code</a>
        </li>
      </ValidationSummaryList>
    </ValidationSummary>
  )
}
