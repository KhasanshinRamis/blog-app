'use client';

import { createContext, useEffect, useState } from 'react';

export const ThemeContex = createContext();

const getFromLocalStorage = () => {
	if(typeof window !== 'undefined') {
		const value = localStorage.getItem('theme');
		return value || 'light';
	}

};

export const ThemeContextProvider = ({children}) => {
	const [ theme, setTheme] = useState(() => {
		return getFromLocalStorage();
	});

	const toggleThem = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	useEffect(() => {
		localStorage.setItem("theme", theme);
	}, [theme]);

	return <ThemeContex.Provider value={{theme, toggleThem}}>{children}</ThemeContex.Provider>;
};