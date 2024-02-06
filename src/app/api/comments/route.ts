import { getAuthSession } from '@/utils/auth';
import prisma from '@/utils/connect';
import { error } from 'console';
import { NextRequest, NextResponse } from 'next/server';

// Get all comments of a post
export const GET = async (req: NextRequest) => {

	const { searchParams } = new URL(req.url);

	const postSlug = searchParams.get("postSlug");

	try {
		const comments = await prisma.comment.findMany({
			where: { 
				...(postSlug && { postSlug }) ,
			},
			include: { user: true },
		});
		return NextResponse.json({comments}, { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
};

export const POST = async (req: NextRequest) => {

	const session = await getAuthSession();

	if (!session) {
		return NextResponse.json({message: 'Not authenticated!'}, {status: 401});
	}


	try {
		const body = await req.json();
		const comment = await prisma.comment.create({
			data: {...body, userEmail: session.user.email },
		});

		return NextResponse.json({comment}, {status: 200});
	} catch (error: any) {
		return NextResponse.json({error: error.message}, {status: 500});
	}
};