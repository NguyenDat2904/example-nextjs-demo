import prisma from "@/lib/prisma";
import CreateUserPostgres from "./(components)/CreateUserPostgres";
import TableUser from "./(components)/TableUser";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});
export default async function Home() {
  const getDataUser = await prisma.user.findMany();

  return (
    <div>
      <div className={roboto.className}>Table User</div>
      <CreateUserPostgres />
      <hr className="my-4" />
      <TableUser getDataUser={getDataUser} />
    </div>
  );
}
