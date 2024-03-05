// import User from "@/app/(models)/User";
// import { NextResponse } from "next/server";

// export async function PATCH(req) {
//   try {
//     const body = await req.json();
//     const userData = body.formData;

//     const user = await User.findOne({ email: userData?.email });
//     // check USER
//     if (!user) {
//       return NextResponse.json({ message: "User not found" }, { status: 400 });
//     }

//     if (userData.full_name) {
//       user.full_name = userData.full_name;
//     } else if (userData.email) {
//       user.email = userData.email;
//     }
//     await user.save();
//     return NextResponse.json(
//       { message: "Edit User information successfully" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ message: "Error", err }, { status: 500 });
//   }
// }
