import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CardListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	page: number;
	category?: string;
}