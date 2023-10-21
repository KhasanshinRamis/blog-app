import styles from './page.module.css';
import { Feature, CategoryList, CardList, Menu, Container } from '@/components';

export default function Home() {

	// const [isOpened] = useMenuBurger((state) => [state.isOpened]);
	
	return (
		<Container>
			<Feature />
			<CategoryList />
			<div className={styles.content}>
				<CardList />
				<Menu />
			</div>
		</Container>
	);
}
