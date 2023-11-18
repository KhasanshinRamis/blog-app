'use client';

import { CategoryListProps } from './CategoryList.props';
import styles from './CategoryList.module.scss';
import { useEffect } from 'react';
import { useCategories } from '@/store/useCategories';
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';
import { ICategory } from '@/interfaces/categories.interface';


export const CategoryList = ({ ...props }: CategoryListProps): JSX.Element => {

	const [ categories, getAllCategories ] = useCategories(
		(state) => [ state.categories, state.getAllCategories]
	); 

	useEffect(() => {
		getAllCategories();
	}, [getAllCategories()]);

	return (
		<div className={styles.container} {...props}>
			<h1 className={styles.title}>Popular Categories</h1>
			<div className={styles.categories}>
				{categories && categories.map((category: ICategory) => (
					<Link
						key={category._id}
						href={`/blog?category=${category.title}`}
						className={cn(styles.category, styles[category.title])}
					>
						{category.img && <Image
							src={`/${category.title}.png`}
							alt={category.title}
							width={32}
							height={32}
							className={styles.image}
						/>}						
						{category.title}
					</Link>
				))}
			</div>
		</div>
	);
};