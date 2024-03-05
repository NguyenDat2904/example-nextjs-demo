// import User from "@/app/(models)/User";
// import { NextResponse } from "next/server";

// export async function GET(req) {
//   try {
//     const page = parseInt(req.query?.page) || 1;
//     const limit = parseInt(req.query?.limit) || 25;
//     const totalUsers = await User.countDocuments();
//     const totalPages = Math.ceil(totalUsers / limit);

//     const response = await User.find();
//     return NextResponse.json(
//       { data: response, page, totalPages },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ message: "Error", error }, { status: 500 });
//   }
// }
