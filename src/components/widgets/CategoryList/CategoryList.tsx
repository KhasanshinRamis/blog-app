import { CategoryListProps } from './CategoryList.props';
import styles from './CategoryList.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';

const categoryData = [
	{title: 'style'},
	{title: 'fashion'},
	{title: 'food'},
	{title: 'travel'},
	{title: 'culture'},
	{title: 'coding'},
];

export const CategoryList = ({ ...props }: CategoryListProps): JSX.Element => {
	return (
		<div
			className={styles.container}
			{...props}
		>
			<h1 className={styles.title}>Popular Categories</h1>
			<div className={styles.categories}>

				{categoryData.map((cat) => 
					<Link
						key={cat.title}
						href={`/blog?category=${cat.title}`}
						className={cn(styles.category, styles[cat.title])}
					>
						<Image
							src={`/${cat.title}.png`}
							alt={cat.title}
							width={32}
							height={32}
							className={styles.image}
						/>
						{cat.title}
					</Link>
				)}

			</div>
		</div>
	);
};