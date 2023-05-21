import NextAuth from "next-auth";
// import GithubProvider from 'next-auth/providers/github'
// import TwitterProvider from 'next-auth/providers/twitter'
import GoogleProvider from "next-auth/providers/google";
// import EmailProvider from 'next-auth/providers/email'
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../database/connectDB";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),

  providers: [
    // GithubProvider({
    // 	clientId: process.env.GITHUB_ID,
    // 	clientSecret: process.env.GITHUB_SECRET,
    // }),
    // TwitterProvider({
    // 	clientId: process.env.TWITTER_CLIENT_ID,
    // 	clientSecret: process.env.TWITTER_CLIENT_SECRET,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // EmailProvider({
    // 	server: {
    // 		host: process.env.EMAIL_SERVER_HOST,
    // 		port: process.env.EMAIL_SERVER_PORT,
    // 		auth: {
    // 			user: process.env.EMAIL_SERVER_USER,
    // 			pass: process.env.EMAIL_SERVER_PASSWORD,
    // 		},
    // 	},
    // 	from: process.env.EMAIL_FROM,
    // }),
  ],

  // callbacks: {
  //       async session({ session, token }) {
  //           session = {
  //               ...session,
  //               user: {
  //                   ...session.user,
  //                   id: token?.sub,
  //               },
  //           };
  //           console.log("session.user.id", session.user.id)
  //           return session;
  //       },
  //   },

  secret: process.env.JWT_SECRET,
  database: process.env.MONGODB_URI,
  session: {
    user: true,
    jwt: true,
    profile: true,
  },
  user: {
    secret: process.env.JWT_SECRET,
  },
  debug: process.env.NODE_ENV === "development",

  callbacks: {
    // async session({ session, token }) {
    //   // Extract the login part from the user's email
    //   const login = session.user.email.split("@")[0];

    //   // Add the login field to the user object in the session

    //   // session = {
    //   //               ...session,
    //   //               user: {
    //   //                   ...session.user,
    //   //                   id: token?.sub,
    //   //               },
    //   //           };
    //   //           console.log("session.user.id", session.user.id)
    //   //           return session;

    //   session = {
    //     ...session,
    //     user: {
    //       ...session.user,
    //       id: token?.sub,
    //       login: login,
    //     },
    //   };
    //   console.log("session.user.id", session.user.id);
    //   return session;
    // },

    session: async ({ session, user }) => {
      // if (session?.user) {
      //   (session.user.id) = (user.id);
      //   (session.user.login) = (user.login);
      //   (session.user.avatar_url) = (user.avatar_url);
      //   console.log("session.user.id", session.user.id)
      //   console.log("session.user.login"+user.login)
      // }
      if (user) {
        const login = session.user.email.split("@")[0];
        session = {
          ...session,
          user: {
            // ...session.user,
            login: login,
            ...user,
          },
        };
      }
      return session;
    },
    async signIn({ user: User, profile: profile }) {
      // define client
      const client = await clientPromise;

      // define database
      const db = client.db("database");

      console.log("User details here " + User);
      console.log("profile details here " + profile);

      try {
        // get user data
        const insertDocument = { User };
        // @ts-ignore
        const dataUsers = await db
          .collection("users")
          .updateMany({ _id: User.id }, { $set: insertDocument });
        if (dataUsers) {
          console.log("Added " + String(User.id) + " to database!");
          // this.session.user.trophies = dataUsers.trophies;
          return this.session;
        }
        return this.session;
      } catch (error) {
        // const dataUsers = await db.collection("users").findOne(_id== `${User.id}`)
        console.log(
          "User could not be added to database due to an error or either existing"
        );
        return this.session;
      }
    },
  },
  pages: {
    signIn: "/join",
  },
};

export default NextAuth(authOptions);
