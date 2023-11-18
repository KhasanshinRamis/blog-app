import { Comment } from './comment.interface';

export interface IPost {
	_id: string;
    createdAt: string;
    slug: string;
    title: string;
    description: string;
    img?: string;
    views: number;
    categorySlug: string;
    userEmail: string
	comments: Comment[];
}