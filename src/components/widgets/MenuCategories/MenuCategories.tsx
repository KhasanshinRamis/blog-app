import Link from 'next/link';
import styles from './MenuCategories.module.scss';
import { MenuCategoriesProps } from './MenuCategories.props';
import cn from 'classnames';

export const MenuCategories = ({ ...props }: MenuCategoriesProps):JSX.Element => {
	return (
		<div className={styles.categoryList} {...props}>
			<Link
				href='/blog?cat=style'
				className={cn(styles.categoryItem, styles.style)}
			>
				Style
			</Link>
		
			<Link
				href='/blog?cat=travel'
				className={cn(styles.categoryItem, styles.travel)}
			>
				Travel
			</Link>

			<Link
				href='/blog?cat=culture'
				className={cn(styles.categoryItem, styles.culture)}
			>
				Culture
			</Link>

			<Link
				href='/blog?cat=food'
				className={cn(styles.categoryItem, styles.food)}
			>
				Food
			</Link>

			<Link
				href='/blog?cat=fashion'
				className={cn(styles.categoryItem, styles.fashion)}
			>
				Fashion
			</Link>

			<Link
				href='/blog?cat=coding'
				className={cn(styles.categoryItem, styles.coding)}
			>
				Coding
			</Link>
		</div>
	);
};