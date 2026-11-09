import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/registry/main/ui/accordion"

export default function AccordionDisabled() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="basic">
        <AccordionTrigger>Basic plan</AccordionTrigger>
        <AccordionContent>Up to 3 projects and 1 GB of storage.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="team" disabled>
        <AccordionTrigger>Team plan (available to admins only)</AccordionTrigger>
        <AccordionContent>Unlimited projects, shared workspaces and SSO.</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
