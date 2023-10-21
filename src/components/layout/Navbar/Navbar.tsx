import { NavbarProps } from './Navbar.props';
import styles from './Navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { AuthLink, ThemeToggle, ButtonIconMenu, MenuBurger } from '@/components';
import { closeMenuBurger } from '@/helpers/closeMenuBurger';

export const Navbar = ({ ...props }: NavbarProps): JSX.Element => {


	return (
		<nav
			className={styles.container}
			{...props}
		>
			<div className={styles.social}>
				<Image src='/facebook.png' alt='facebook' width={24} height={24}/>
				<Image src='/instagram.png' alt='instagram' width={24} height={24}/>
				<Image src='/tiktok.png' alt='tiktok' width={24} height={24}/>
				<Image src='/youtube.png' alt='youtube' width={24} height={24}/>
			</div>

			<div className={styles.logo}>Взгляды и перспективы</div>
			
			<div className={styles.links}>

				<ThemeToggle/>	
				
				<Link href='/' className={styles.link}>Homepage</Link>
				<Link href='/' className={styles.link}>Contact</Link>
				<Link href='/' className={styles.link}>About</Link>
			
				<AuthLink/>
				
				<div className={styles.burger}>
					<ButtonIconMenu/>

					<MenuBurger>
						<Link href='/' onClick={closeMenuBurger}>Homepage</Link>
						<Link href='/' onClick={closeMenuBurger}>Contact</Link>
						<Link href='/' onClick={closeMenuBurger}>About</Link>
						<AuthLink isBurger={true} onClick={closeMenuBurger}/>
					</MenuBurger>
				</div>

			</div>
		</nav>
	);
};