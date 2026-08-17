"use client"

import { useState } from "react"
import { useAuthActions } from "@convex-dev/auth/react"
import {
  AuthLoading,
  Authenticated,
  Unauthenticated,
  useQuery,
} from "convex/react"

import { api } from "@/convex/_generated/api"
import { GoogleIcon } from "@/components/google-icon"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function Page() {
  return (
    <main className="flex min-h-svh items-center justify-center p-6">
      <AuthLoading>
        <LoadingCard />
      </AuthLoading>
      <Unauthenticated>
        <SignInCard />
      </Unauthenticated>
      <Authenticated>
        <ProfileCard />
      </Authenticated>
    </main>
  )
}

function LoadingCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-4 w-48" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-9 w-full" />
      </CardContent>
    </Card>
  )
}

function SignInCard() {
  const { signIn } = useAuthActions()
  const [pending, setPending] = useState(false)

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
        <CardDescription>
          Test the Google OAuth flow for headshot-app.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          className="w-full"
          variant="outline"
          disabled={pending}
          onClick={() => {
            setPending(true)
            void signIn("google", { redirectTo: "/" }).catch(() => {
              setPending(false)
            })
          }}
        >
          <GoogleIcon className="size-4" />
          {pending ? "Redirecting…" : "Continue with Google"}
        </Button>
      </CardContent>
    </Card>
  )
}

function ProfileCard() {
  const { signOut } = useAuthActions()
  const user = useQuery(api.users.currentUser)

  if (user === undefined) {
    return <LoadingCard />
  }

  if (user === null) {
    return (
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>No profile found</CardTitle>
          <CardDescription>
            Signed in, but no matching row in the users table.
          </CardDescription>
        </CardHeader>
      </Card>
    )
  }

  const initials = (user.name ?? user.email ?? "?").slice(0, 2).toUpperCase()

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Signed in</CardTitle>
        <CardDescription>
          Profile data Convex Auth stored from Google.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Avatar className="size-12">
            {user.image ? <AvatarImage src={user.image} alt="" /> : null}
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="truncate font-medium">{user.name ?? "(no name)"}</p>
            <p className="truncate text-sm text-muted-foreground">
              {user.email ?? "(no email)"}
            </p>
          </div>
        </div>
        <pre className="overflow-x-auto rounded-md bg-muted p-3 font-mono text-xs">
          {JSON.stringify(user, null, 2)}
        </pre>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => void signOut()}
        >
          Sign out
        </Button>
      </CardFooter>
    </Card>
  )
}
