'use client';

import { ThemeContex } from '@/context/ThemeContext/ThemeContex';
import { useContext, useEffect, useState } from 'react';

export const ThemeProvider = ({children}) => {
	
	const { theme } = useContext(ThemeContex);

	const [mounted, setMounted ] = useState<boolean>(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if(mounted) {
		return <div className={theme}>{children}</div>;
	}

};




