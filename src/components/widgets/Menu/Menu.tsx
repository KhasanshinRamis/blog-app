import { MenuProps } from './Menu.props';
import styles from './Menu.module.scss';
import { MenuCategories, MenuPosts } from '..';

export const Menu = ({ ...props }: MenuProps): JSX.Element => {
	return (
		<div
			className={styles.container}
			{...props}
		>
			<h2 className={styles.subtitle}>What`s hot</h2>
			<h1 className={styles.title}>Most Popular</h1>
			<MenuPosts withImage={false}/>

			<h2 className={styles.subtitle}>Discover by topic</h2>
			<h1 className={styles.title}>Categories</h1>
			<MenuCategories/>

			<h2 className={styles.subtitle}>Chosen by the editor</h2>
			<h1 className={styles.title}>Editors Pick</h1>
			<MenuPosts withImage={true}/>

		</div>
	);
};