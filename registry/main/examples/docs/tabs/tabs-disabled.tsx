import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/main/ui/tabs"

export default function TabsDisabled() {
  return (
    <Tabs defaultValue="details" className="w-full max-w-md">
      <TabsList aria-label="Invoice">
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="payments">Payments</TabsTrigger>
        <TabsTrigger value="refunds" disabled>
          Refunds
        </TabsTrigger>
      </TabsList>
      <TabsContent value="details">
        <p className="text-muted-foreground">Refunds become available once the invoice is paid.</p>
      </TabsContent>
      <TabsContent value="payments">
        <p className="text-muted-foreground">No payments have been recorded.</p>
      </TabsContent>
    </Tabs>
  )
}
