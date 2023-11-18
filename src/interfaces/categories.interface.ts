import { Post } from './post.interface';

export interface ICategory {
	_id: string;
    slug: string;
    title: string;
    img: string;
    Posts: Post[];
}

