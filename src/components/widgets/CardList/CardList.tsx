import { CardListProps } from './CardList.props';
import styles from './CardList.module.scss';
import { Card, Pagination } from '@/components';


export const CardList = ({ ...props }: CardListProps): JSX.Element => {
	return (
		<div
			className={styles.container}
			{...props}
		>
			<h1 className={styles.title}>Recent Posts</h1>
			<div className={styles.posts}>
				<Card pathImage={'/p2.jpg'}/>
				<Card pathImage={'/p3.jpg'}/>
				<Card pathImage={'/p4.jpg'}/>
			</div>
			<Pagination/>
		</div>
	);
};