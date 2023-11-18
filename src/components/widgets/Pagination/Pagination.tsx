'use client';

import { PaginationProps } from './Pagination.props';
import styles from './Pagination.module.scss';
import { useRouter } from 'next/navigation';

export const Pagination = ({ page, hasPrev, hasNext, ...props }: PaginationProps) => {
	const router = useRouter();

	return (
		<div
			className={styles.container}
			{...props}
		>
			<button className={styles.button} 
				onClick={() => router.push(`?page=${page - 1}`)}
				disabled={!hasPrev}
			>
				Previous
			</button>
			<button className={styles.button} 
				onClick={() => router.push(`?page=${page + 1}`)}
				disabled={!hasNext}
			>
				Next
			</button>
		</div>
	);
};