import { Avatar, AvatarFallback } from "@/registry/main/ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/registry/main/ui/hover-card"

export default function HoverCardDemo() {
  return (
    <p>
      Reviewed by{" "}
      <HoverCard>
        <HoverCardTrigger asChild>
          <a href="#" className="font-medium underline underline-offset-4">
            @nextjs
          </a>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="flex gap-4">
            <Avatar>
              <AvatarFallback>NJ</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <p className="font-semibold">Next.js</p>
              <p className="text-muted-foreground">The React framework, created and maintained by Vercel.</p>
              <p className="text-sm text-muted-foreground">Joined December 2021</p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </p>
  )
}
