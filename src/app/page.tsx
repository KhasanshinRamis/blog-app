import styles from './page.module.css';
import { Feature, CardList, Menu, Container, CategoryList } from '@/components';
// import dynamic, {type DynamicOptions} from 'next/dynamic';

// const DynamicCategoryList = dynamic(
// 	(import('../components/widgets/CategoryList/CategoryList') as DynamicOptions<JSX.Element>), 
// 	{ssr: false}
// );

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
