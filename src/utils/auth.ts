// import GithubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from '@auth/prisma-adapter';
import type { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import prisma from './connect';

export const authOptions: AuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		// GithubProvider({
		//     clientId: process.env.GITHUB_ID!,
		//     clientSecret: process.env.GITHUB_SECRET!,
		// }),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID as string,
			clientSecret: process.env.GOOGLE_SECRET as string,
		}),
	],
};