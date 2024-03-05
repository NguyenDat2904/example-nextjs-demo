import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req) {
  try {
    const body = await req.json();
    const userData = body.formData;

    const { searchParams } = req.nextUrl;
    const id = searchParams.get("id");
    await prisma.user.update({ data: userData, where: { id: id } });
    return NextResponse.json(
      { message: "Update User information successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
