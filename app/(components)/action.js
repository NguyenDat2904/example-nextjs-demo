"use server";
import { redirect } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import prisma from "@/lib/prisma";

export const editUser = async (FormData, id) => {
  console.log(FormData);
  const formData = {
    full_name: FormData.get("full_name"),
    email: FormData.get("email"),
  };
  await prisma.user.update({ data: formData, where: { id: id } });
  //   window.location.reload();
};

export async function create(FormData) {

  const formData = {
    id: uuidv4(),
    full_name: FormData.get("full_name"),
    email: FormData.get("email"),
    password: FormData.get("password"),
  };

  await prisma.user.create({ data: formData });
  redirect("/");
}