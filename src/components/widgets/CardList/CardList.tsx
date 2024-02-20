'use client';

import { CardListProps } from './CardList.props';
import styles from './CardList.module.scss';
import { IPost } from '@/interfaces/post.interface';
import { Card } from '@/components/UI/Card/Card';
import { Pagination } from '@/components/widgets/Pagination/Pagination';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import postService from '@/services/post.service';
import axios from 'axios';
import { useState } from 'react';




export const CardList = ({ page, category, ...props }: CardListProps): JSX.Element => {

	const POST_PER_PAGE = 4;

	const { data: postsData, isLoading, error } = useQuery({
		queryKey: ['post', {page, category}],
		queryFn: () => postService.getAll(page, category),
		select: ({ data }) => data,
		//плавный переход с одной page на другой
		placeholderData: keepPreviousData
	});

	const hasPrev = POST_PER_PAGE * (page - 1) > 0;
	const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < postsData?.count;

	console.log(postsData);

	if (isLoading) {  
		return (
			<div>Loading...</div>
		);
	}

	if (axios.isAxiosError(error)) { 
		return (
			<div>Error + {error.message}</div>
		);
	}

	return (
		<div
			className={styles.container}
			{...props}
		>
			<h1 className={styles.title}>Recent Posts</h1>
			{postsData?.posts.map((post: IPost) => (
				<Card key={post._id} post={post} />
			))}
			<Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
		</div>

	);
};