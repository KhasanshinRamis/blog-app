import { create } from 'zustand';
import { getPosts } from '@/services/getPosts';
import { IPost } from '@/interfaces/post.interface';
import { getPostBySlug } from '@/services/getPostBySlug';


export interface IPosts {
	posts: IPost[];
	count: number;
	curSlug: number;
	getPosts: (page: number | '', category: string) => Promise<void>;
	getPostBySlug: (slug: string) => Promise<void>;
}



export const usePosts = create<IPosts>((set) => ({
	posts: [],
	count: 0,
	curSlug: 1,
	getPosts: async (page: number | '', category: string) => {
		const { posts, count } = await getPosts(page, category);
		set({
			posts: posts,
			count: count
		});
	},
	getPostBySlug: async (curSlug: string) => {
		const slug = await getPostBySlug(curSlug);
		set({
			curSlug: slug.post.slug
		});
	}
}));