'use client';

import { create } from 'zustand';

interface MenuBurger {
	isOpened: boolean;
	setIsOpened: (newIsOpened: boolean) => void;
}


export const useMenuBurger = create<MenuBurger>((set) => ({
	isOpened: false,
	setIsOpened: (newIsOpened:  boolean) => {
		set({isOpened: newIsOpened});
	},
})); 