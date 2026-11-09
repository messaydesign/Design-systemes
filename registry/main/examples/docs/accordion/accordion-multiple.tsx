import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/registry/main/ui/accordion"

export default function AccordionMultiple() {
  return (
    <Accordion type="multiple" defaultValue={["account", "notifications"]} className="w-full max-w-md">
      <AccordionItem value="account">
        <AccordionTrigger>Account</AccordionTrigger>
        <AccordionContent>Change your name, email address and password.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="notifications">
        <AccordionTrigger>Notifications</AccordionTrigger>
        <AccordionContent>Choose which updates you get by email and push notification.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="privacy">
        <AccordionTrigger>Privacy</AccordionTrigger>
        <AccordionContent>Control who can see your profile and activity.</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
