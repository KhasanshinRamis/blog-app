import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export const GET = async () => {
	try {
		const categories = await prisma.category.findMany();
		return NextResponse.json(categories, { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
};
