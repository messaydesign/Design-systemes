import { Avatar, AvatarFallback, AvatarImage } from "@/registry/main/ui/avatar"
import { UserIcon } from "@/registry/main/ui/icons"
import { Spinner } from "@/registry/main/ui/spinner"

export default function AvatarFallbacks() {
  return (
    <>
      {/* No initials known: icon fallback */}
      <Avatar>
        <AvatarFallback>
          <UserIcon aria-label="Unknown user" role="img" />
        </AvatarFallback>
      </Avatar>
      {/* Loading: show a spinner until the image arrives */}
      <Avatar>
        <AvatarFallback>
          <Spinner size="sm" />
        </AvatarFallback>
      </Avatar>
      {/* Image that fails falls back automatically (after a short delay) */}
      <Avatar>
        <AvatarImage src="/does-not-exist.png" alt="Sara Lemma" />
        <AvatarFallback delayMs={300}>SL</AvatarFallback>
      </Avatar>
    </>
  )
}
