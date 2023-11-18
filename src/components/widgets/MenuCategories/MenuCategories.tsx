'use client';

import Link from 'next/link';
import styles from './MenuCategories.module.scss';
import { MenuCategoriesProps } from './MenuCategories.props';
import cn from 'classnames';
import { useCategories } from '@/store/useCategories';
import { useEffect } from 'react';
import { ICategory } from '@/interfaces/categories.interface';

export const MenuCategories = ({ ...props }: MenuCategoriesProps):JSX.Element => {
	
	const [ categories, getAllCategories ] =useCategories((state) => [state.categories, state.getAllCategories]);

	useEffect(() => {
		getAllCategories();
	}, [getAllCategories()]);
	
	return (
		<div className={styles.categoryList} {...props}>
			{categories && categories.map((category: ICategory) => (
				<Link
				key={category._id}
					href={`/blog?cat=${category.title}`}
					className={cn(styles.categoryItem, styles[category.title])}
				>
					{category.title}
				</Link>
			))}
		</div>
	);
};