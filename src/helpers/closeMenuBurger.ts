'use client';

import { useMenuBurger } from '@/store/useMenuBurger';



export const closeMenuBurger = () => {
	const [isOpened, setIsOpened] = useMenuBurger((state) => [state.isOpened, state.setIsOpened]);

	setIsOpened(!isOpened);
};