import styles from './page.module.css';
import { Feature, CategoryList, CardList, Menu, Container } from '@/components';


export default function Home({ searchParams }) { 
	const page = parseInt(searchParams.page) || 1;

	return (
		<Container>
			<Feature />
			<CategoryList />
			<div className={styles.content}>
				<CardList page={page}/>
				<Menu />
			</div>
		</Container>
	);
}
