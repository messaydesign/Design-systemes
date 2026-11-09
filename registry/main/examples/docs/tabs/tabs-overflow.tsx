import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/main/ui/tabs"

const months = ["January", "February", "March", "April", "May", "June", "July", "August"]

export default function TabsOverflow() {
  return (
    <Tabs defaultValue="January" className="w-full max-w-xs">
      <TabsList variant="line" aria-label="Month">
        {months.map((month) => (
          <TabsTrigger key={month} value={month}>
            {month}
          </TabsTrigger>
        ))}
      </TabsList>
      {months.map((month) => (
        <TabsContent key={month} value={month}>
          <p className="text-muted-foreground">Report for {month}.</p>
        </TabsContent>
      ))}
    </Tabs>
  )
}
