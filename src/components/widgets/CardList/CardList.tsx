'use client';

import { CardListProps } from './CardList.props';
import styles from './CardList.module.scss';
import { usePosts } from '@/store/usePosts';
import { useEffect } from 'react';
import { IPost } from '@/interfaces/post.interface';
import { Card } from '@/components/UI/Card/Card';
import { Pagination } from '@/components/widgets/Pagination/Pagination';




export const CardList = ({ page, category, ...props }: CardListProps): JSX.Element => {

	const [posts, getPosts, count] = usePosts((state) => [state.posts, state.getPosts, state.count]);

	useEffect(() => {
		getPosts(page, category);
	}, [posts]);

	const POST_PER_PAGE = 4;

	const hasPrev = POST_PER_PAGE * (page - 1) > 0;
	const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;


	return (
		<div
			className={styles.container}
			{...props}
		>
			<h1 className={styles.title}>Recent Posts</h1>
			{posts && posts.map((post: IPost) => (
				<Card key={post._id} post={post}/>
			))}
			<Pagination page={page} hasPrev={hasPrev} hasNext={hasNext}/>
		</div>
		
	);
};