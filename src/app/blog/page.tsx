import { CardList, Container, Menu } from '@/components';
import styles from './blogPage.module.scss';

export default function BlogPage() {
	return (
		<Container className={styles.container}>
			<h1 className={styles.title}>Style Blog</h1>
			<div className={styles.content}>
				<CardList/>
				<Menu/>
			</div>
		</Container>
	);
}