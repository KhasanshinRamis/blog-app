import { getAuthSession } from '@/utils/auth';
import prisma from '@/utils/connect';
import { error } from 'console';
import { NextRequest, NextResponse } from 'next/server';

// Get all posts
export const GET = async (req: NextRequest) => {

	const { searchParams } = new URL(req.url);

	const page = searchParams.get('page');
	const category = searchParams.get('category');

	const POST_PER_PAGE = 4;
	const query = {
		take: POST_PER_PAGE,
		skip: POST_PER_PAGE * (page - 1), 
		where: {
			...(category && { categorySlug: category }),
		},
	};

	try {
		const [posts, count] = await prisma.$transaction([
			prisma.post.findMany(query),
			prisma.post.count({where: query.where}),
		]);
		return NextResponse.json({posts, count}, { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
};

export const POST = async (req: NextRequest) => {
	const session = await getAuthSession();
  
	if (!session) {
		return NextResponse.json({ message: "Not Authenticated!" }, { status: 401 });
	}
  
	try {
		const body = await req.json();
		const post = await prisma.post.create({
			data: { ...body, userEmail: session.user.email },
		});
		return NextResponse.json(post, { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
  };