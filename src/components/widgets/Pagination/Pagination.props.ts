import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface PaginationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
	page: number;
	hasPrev: boolean;
	hasNext: boolean;
}