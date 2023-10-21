import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface MenuBurgerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
	children: ReactNode;
}