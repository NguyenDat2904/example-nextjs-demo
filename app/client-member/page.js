"use client";
import { useSession } from "next-auth/react";
import { redirect, useSearchParams } from "next/navigation";

function Member() {
  const searchParams = useSearchParams();
  console.log(searchParams.get("id"));

  // Access user info in React components
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin/callbackUrl=/client-member");
    },
  });

  return (
    <div>
      <h1>Member Client Session</h1>
      <p>
        Hello <span>{session?.user?.name}!</span>
      </p>
      <p>
        Email: <span>{session?.user?.email}</span>
      </p>
      <p>
        Role: <span>{session?.user?.role}</span>
      </p>
    </div>
  );
}

export default Member;
