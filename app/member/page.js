import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

async function Member() {
  // Access AccessToken, User info
  const session = await getServerSession(options);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/member");
  }

  return (
    <div>
      <h1>Member Sever Session</h1>
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
