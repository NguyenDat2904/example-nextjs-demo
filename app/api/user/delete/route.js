// api/user/delete?id=

import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    const { searchParams } = req.nextUrl;
    const id = searchParams.get("id");
    await prisma.user.delete({
      where: {
        id: id.toString(),
      },
    });
    return NextResponse.json(
      { message: "Delete User information successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
