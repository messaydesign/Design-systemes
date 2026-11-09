"use client"

import * as React from "react"

import { Button } from "@/registry/main/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/main/ui/tabs"

export default function TabsControlled() {
  const [tab, setTab] = React.useState("shipping")
  return (
    <Tabs value={tab} onValueChange={setTab} className="w-full max-w-md">
      <TabsList aria-label="Checkout">
        <TabsTrigger value="shipping">Shipping</TabsTrigger>
        <TabsTrigger value="payment">Payment</TabsTrigger>
        <TabsTrigger value="review">Review</TabsTrigger>
      </TabsList>
      <TabsContent value="shipping">
        <p className="text-muted-foreground">Where should we send your order?</p>
        <Button className="w-fit" onClick={() => setTab("payment")}>
          Continue to payment
        </Button>
      </TabsContent>
      <TabsContent value="payment">
        <p className="text-muted-foreground">How would you like to pay?</p>
        <Button className="w-fit" onClick={() => setTab("review")}>
          Review order
        </Button>
      </TabsContent>
      <TabsContent value="review">
        <p className="text-muted-foreground">Check your order before you place it.</p>
      </TabsContent>
    </Tabs>
  )
}
