import { create } from 'zustand';
import { getPosts } from '@/services/getPosts';
import { IPost } from '@/interfaces/post.interface';


export interface IPosts {
	posts: IPost[];
	count: number;
	getPosts: (page: number | '', category: string) => Promise<void>;
}



export const usePosts = create<IPosts>(set => ({
	posts: [],
	count: 0,
	getPosts: async (page, category) => {
		const response = await getPosts(page, category);
		set({ 
			posts: response.data.posts,
			count: response.data.count
		});
	},
}));