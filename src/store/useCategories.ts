import { create } from 'zustand';
import { getAllCategories } from '@/services/getAllCategories';
import { ICategory } from '@/interfaces/categories.interface';


export interface ICategories {
	categories: ICategory[];
	getAllCategories: () => Promise<void>;
}



export const useCategories = create<ICategories>(set => ({
	categories: [],
	getAllCategories: async () => {
		const response = await getAllCategories();
		set({ categories: response });
	}
}));