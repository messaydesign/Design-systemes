import { FileIcon, SearchIcon, UserIcon } from "@/registry/main/ui/icons"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/main/ui/tabs"

export default function TabsIcons() {
  return (
    <Tabs defaultValue="files" className="w-full max-w-md">
      <TabsList variant="line" aria-label="Search results">
        <TabsTrigger value="files">
          <FileIcon />
          Files
        </TabsTrigger>
        <TabsTrigger value="people">
          <UserIcon />
          People
        </TabsTrigger>
        <TabsTrigger value="saved">
          <SearchIcon />
          Saved searches
        </TabsTrigger>
      </TabsList>
      <TabsContent value="files">
        <p className="text-muted-foreground">12 files match “brand guidelines”.</p>
      </TabsContent>
      <TabsContent value="people">
        <p className="text-muted-foreground">3 people match “brand guidelines”.</p>
      </TabsContent>
      <TabsContent value="saved">
        <p className="text-muted-foreground">You have no saved searches yet.</p>
      </TabsContent>
    </Tabs>
  )
}
