"use client"

import * as React from "react"

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger,
} from "@/registry/main/ui/menubar"

const profiles = ["Andy", "Benoit", "Luis"]

export default function MenubarRadio() {
  const [profile, setProfile] = React.useState("Benoit")

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Profiles</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel inset>Switch profile</MenubarLabel>
          <MenubarRadioGroup value={profile} onValueChange={setProfile}>
            {profiles.map((name) => (
              <MenubarRadioItem key={name} value={name}>
                {name}
              </MenubarRadioItem>
            ))}
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>Edit profiles…</MenubarItem>
          <MenubarItem inset variant="destructive">
            Remove {profile}
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
