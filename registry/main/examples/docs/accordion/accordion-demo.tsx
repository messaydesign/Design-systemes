import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/registry/main/ui/accordion"

export default function AccordionDemo() {
  return (
    <Accordion type="single" collapsible defaultValue="shipping" className="w-full max-w-md">
      <AccordionItem value="shipping">
        <AccordionTrigger>How long does delivery take?</AccordionTrigger>
        <AccordionContent>Most orders arrive in 2–4 working days. You’ll get a tracking link by email.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="returns">
        <AccordionTrigger>Can I return an item?</AccordionTrigger>
        <AccordionContent>Yes. Return unused items within 30 days for a full refund.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="support">
        <AccordionTrigger>How do I contact support?</AccordionTrigger>
        <AccordionContent>Use the chat in your account, or email support@example.com. We reply within one day.</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
