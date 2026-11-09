"use client"

import * as React from "react"

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/registry/main/ui/menubar"

export default function MenubarCheckboxes() {
  const [bookmarks, setBookmarks] = React.useState(true)
  const [fullUrls, setFullUrls] = React.useState(false)

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked={bookmarks} onCheckedChange={setBookmarks}>
            Always show bookmarks bar
          </MenubarCheckboxItem>
          <MenubarCheckboxItem checked={fullUrls} onCheckedChange={setFullUrls}>
            Always show full URLs
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>Reload</MenubarItem>
          <MenubarItem inset>Toggle full screen</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
