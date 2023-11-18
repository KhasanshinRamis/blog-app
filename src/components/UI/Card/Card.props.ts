import { IPost } from '@/interfaces/post.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
	post: IPost;
}