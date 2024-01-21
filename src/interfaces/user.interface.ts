import { IComment } from './comment.interface';
import { IPost } from './post.interface';

export interface IUser {
	_id: string;
    name: string;
    email: string;
	emailVerified: Date;
    image: string;
	Post: IPost[];
    Comment: IComment[];
}