import User from "@/app/(models)/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const body = await req.json();
    const userData = body.formData;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (userData.full_name === "" || userData.full_name === undefined) {
      return NextResponse.json(
        { message: "Name are required" },
        { status: 400 }
      );
    }
    if (!regex.test(userData.email)) {
      return NextResponse.json(
        { message: "Email must be in correct format" },
        { status: 400 }
      );
    }

    if (userData.password.length < 6 || userData.password === undefined) {
      return NextResponse.json(
        { message: "Password must be at least 6 characters" },
        { status: 400 }
      );
    }

    if (!userData?.email || !userData.password) {
      return NextResponse.json(
        { message: "All field are required" },
        { status: 400 }
      );
    }

    const duplicate = await User.findOne({ email: userData.email });
    if (duplicate) {
      return NextResponse.json({ message: "Duplicate Email" }, { status: 400 });
    }

    const hashPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashPassword;

    await User.create(userData);
    return NextResponse.json({ message: "User created" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
