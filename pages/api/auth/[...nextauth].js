import NextAuth from 'next-auth'
// import GithubProvider from 'next-auth/providers/github'
// import TwitterProvider from 'next-auth/providers/twitter'
import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'

import clientPromise from '../../../database/connectDB'

export default NextAuth({

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
	callbacks: {
		async session({ session, token }) {
			// Extract the login part from the user's email
			const login = session.user.email.split("@")[0];

			// Add the login field to the user object in the session
			session.user = {
				...session.user,
				login,
			};

			return session;
		},

		async signIn({ user }) {
			// Extract the login part from the user's email
			const login = user.email.split("@")[0];

			// Add the login field to the user object
			user = {
				...user,
				login,
			};

			return user;
		},

		async jwt({ session, user }) {
			if (user) {
				// Add the login field to the token
				token.login = user.email.split("@")[0];
			}

			return token;
		},
		
	},

	pages: {
		signIn: '/signin',
	},
	adapter: MongoDBAdapter(clientPromise),
})