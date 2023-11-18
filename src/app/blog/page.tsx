import { CardList, Container, Menu } from '@/components';
import styles from './blogPage.module.scss';

export default function BlogPage({ searchParams }) {
	const page = parseInt(searchParams.page) || 1;
	const { category } = searchParams;

	return (
		<Container className={styles.container}>
			<h1 className={styles.title}>{category} Blog</h1>
			<div className={styles.content}>
				<CardList page={page} category={category}/>
				<Menu/>
			</div>
		</Container>
	);
}