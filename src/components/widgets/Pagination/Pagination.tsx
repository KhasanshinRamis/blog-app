import { PaginationProps } from './Pagination.props';
import styles from './Pagination.module.scss';

export const Pagination = ({ ...props }: PaginationProps): JSX.Element => {
	return (
		<div
			className={styles.container}
			{...props}
		>
			<button className={styles.button}>Previous</button>
			<button className={styles.button}>Next</button>
		</div>
	);
};