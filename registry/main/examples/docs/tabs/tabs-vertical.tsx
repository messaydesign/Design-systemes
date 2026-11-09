import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/main/ui/tabs"

export default function TabsVertical() {
  return (
    <Tabs defaultValue="profile" orientation="vertical" className="w-full max-w-lg">
      <TabsList aria-label="Account settings">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <p className="font-semibold">Profile</p>
        <p className="text-muted-foreground">Your name, photo and how others see you.</p>
      </TabsContent>
      <TabsContent value="password">
        <p className="font-semibold">Password</p>
        <p className="text-muted-foreground">Change your password and sign out of other devices.</p>
      </TabsContent>
      <TabsContent value="notifications">
        <p className="font-semibold">Notifications</p>
        <p className="text-muted-foreground">Choose which emails and alerts you receive.</p>
      </TabsContent>
    </Tabs>
  )
}
