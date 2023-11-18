'use client';

import { ThemeContex } from '@/context/ThemeContext/ThemeContex';
import { PropsWithChildren, useContext, useEffect, useState } from 'react';

export const ThemeProvider = ({children}: PropsWithChildren) => {
	
	const { theme } = useContext(ThemeContex);

	const [mounted, setMounted ] = useState<boolean>(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if(mounted) {
		return <div className={theme}>{children}</div>;
	}

};




