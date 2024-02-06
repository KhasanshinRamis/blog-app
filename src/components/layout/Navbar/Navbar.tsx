"use client";

import { NavbarProps } from './Navbar.props';
import styles from './Navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { AuthLink } from '@/components/UI/AuthLink/AuthLink';
import { ThemeToggle } from '@/components/UI/ThemeToggle/ThemeToggle';
import { ButtonIconMenu } from '@/components/UI/ButtonIconMenu/ButtonIconMenu';
import { MenuBurger} from '@/components/UI/MenuBurger/MenuBurger';
import { closeMenuBurger } from '@/helpers/closeMenuBurger';
import cn from 'classnames';
import { usePathname } from 'next/navigation';

export const Navbar = ({ ...props }: NavbarProps): JSX.Element => {

	const pathname = usePathname();

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

			<Link href='/' className={styles.logo}>Взгляды и перспективы</Link>
			
			<div className={styles.links}>

				<ThemeToggle/>	
				
				<Link href='/?page=1' className={cn(styles.link, {
					[styles.linkActive]: pathname === '/'
				})}>
					Homepage
				</Link>
				<Link href='/contact' className={cn(styles.link, {
					[styles.linkActive]: pathname === '/contact'
				})}>
					Contact
				</Link>
				<Link href='/about' className={cn(styles.link, {
					[styles.linkActive]: pathname === '/about'
				})}>About</Link>
			
				<AuthLink/>
				
				<div className={styles.burger}>
					<ButtonIconMenu/>

					<MenuBurger>
						<Link 
							href='/' 
							className={cn(styles.link, {
								[styles.linkActive]: pathname === '/?page=1'
							})} 
							onClick={closeMenuBurger}
						>
							Homepage
						</Link>
						<Link 
							href='/contact'
							className={cn(styles.link, {
								[styles.linkActive]: pathname === '/contact'
							})}
						>
							Contact
						</Link>
						<Link 
							href='/about' 
							className={cn(styles.link, {
								[styles.linkActive]: pathname === '/about'
							})}
						>
							About
						</Link>
						<AuthLink isBurger={true} onClick={closeMenuBurger}/>
					</MenuBurger>
				</div>

			</div>
		</nav>
	);
};