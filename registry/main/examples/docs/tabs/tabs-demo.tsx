import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/main/ui/tabs"

export default function TabsDemo() {
  return (
    <Tabs defaultValue="overview" className="w-full max-w-md">
      <TabsList aria-label="Project">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <p className="font-semibold">Overview</p>
        <p className="text-muted-foreground">Status, owners and the next milestone for this project.</p>
      </TabsContent>
      <TabsContent value="activity">
        <p className="font-semibold">Activity</p>
        <p className="text-muted-foreground">Comments, uploads and changes from the last 30 days.</p>
      </TabsContent>
      <TabsContent value="settings">
        <p className="font-semibold">Settings</p>
        <p className="text-muted-foreground">Rename the project, change its visibility or archive it.</p>
      </TabsContent>
    </Tabs>
  )
}
