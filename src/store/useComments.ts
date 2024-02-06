import { create } from 'zustand';
import { IComment } from '@/interfaces/comment.interface';
import { getAllComments } from '@/services/getAllComments';



interface IComments {
	comments: IComment[];
	getComments: (slug: number) => Promise<void>;
}


export const useComments = create<IComments>((set) => ({
	comments: [],

	getComments: async (slug: number) => {
		const data = await getAllComments(slug);
		console.log(data);
		set({
			comments: data.comments,
		});
	}
}));