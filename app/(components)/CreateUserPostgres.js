import prisma from "@/lib/prisma";
import { create } from "./action";

function CreateUserPostgres() {
  return (
    <div>
      <form action={create} className="flex flex-col gap-2 w-1/2">
        <h1>Create new User </h1>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="full_name"
          className="m-2 bg-slate-400 rounded px-5 py-3"
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          className="m-2 bg-slate-400 rounded px-5 py-3"
        />
        <label htmlFor="email">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          className="m-2 bg-slate-400 rounded px-5 py-3"
        />

        <button
          type="submit"
          className="bg-blue-300 hover:bg-blue-100 px-2 py-2 w-40"
        >
          Create User
        </button>
      </form>
      {/* <p className="text-red-500">{errorMsg}</p> */}
    </div>
  );
}

export default CreateUserPostgres;
