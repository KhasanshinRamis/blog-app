import { create } from 'zustand';
import { getPosts } from '@/services/getPosts';
import { IPost } from '@/interfaces/post.interface';
import { getPostBySlug } from '@/services/getPostBySlug';


export interface IPosts {
	posts: IPost[];
	post: IPost[];
	count: number;
	getPosts: (page: number | '', category: string) => Promise<void>;
	getPostBySlug: (slug: string) => Promise<void>;
}



export const usePosts = create<IPosts>((set, get) => ({
	posts: [],
	post: [],
	count: 0,
	getPosts: async (page: number | '', category: string) => {
		const response = await getPosts(page, category);
		set({ 
			posts: response.data.posts,
			count: response.data.count
		});
	},
	getPostBySlug: async (slug: string) => {
		const response: string = await getPostBySlug(slug);
		set({
			posts: get().posts.map(
				
				postItem => response === slug
				? { ...postItem}
				: ''
			)
		});
	}
}));