import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/main/ui/tabs"

export default function TabsLine() {
  return (
    <Tabs defaultValue="all" className="w-full max-w-md">
      <TabsList variant="line" aria-label="Notifications">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="mentions">Mentions</TabsTrigger>
        <TabsTrigger value="assigned">Assigned to me</TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <p className="text-muted-foreground">Every notification from the projects you follow.</p>
      </TabsContent>
      <TabsContent value="mentions">
        <p className="text-muted-foreground">Comments where someone mentioned you.</p>
      </TabsContent>
      <TabsContent value="assigned">
        <p className="text-muted-foreground">Tasks and reviews waiting for you.</p>
      </TabsContent>
    </Tabs>
  )
}
