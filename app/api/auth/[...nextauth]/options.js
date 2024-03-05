import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/app/(models)/User";
import bcrypt from "bcrypt";

export const options = {
  providers: [
    GitHubProvider({
      profile(profile) {
        console.log("Profile Github", profile);

        let userRole = "GitHub User";
        if (profile?.email == "dathhcc2@gmail.com") {
          userRole = "admin";
        }
        return {
          ...profile,
          role: userRole,
        };
      },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      profile(profile) {
        console.log("Profile Google", profile);
        let userRole = "Google User";

        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // CredentialsProvider({
    //   // The name to display on the sign in form (e.g. "Sign in with...")
    //   name: "Credentials",
    //   // `credentials` is used to generate a form on the sign in page.
    //   // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    //   // e.g. domain, username, password, 2FA token, etc.
    //   // You can pass any HTML attribute to the <input> tag through the object.
    //   credentials: {
    //     email: { label: "email", type: "text", placeholder: "Your Email" },
    //     password: {
    //       label: "password",
    //       type: "password",
    //       placeholder: "Your Password",
    //     },
    //   },
    //   async authorize(credentials) {
    //     try {
    //       const foundUser = await User.findOne({ email: credentials.email });

    //       if (foundUser) {
    //         console.log("User Exists");
    //         const match = await bcrypt.compare(
    //           credentials.password,
    //           foundUser.password
    //         );
    //         if (match) {
    //           console.log("Good Pass");
    //           delete foundUser.password;
    //           foundUser["role"] = "Unverified Email";
    //           foundUser["name"] = foundUser.full_name;

    //           return foundUser;
    //         }
    //       }
    //     } catch (error) {
    //       console.log(error);
    //     }
    //     return null;
    //   },
    // }),
  ],
  callbacks: {
    // create accessToke
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    // create a login session
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};
