'use client';

import Link from 'next/link';
import { AuthLinkProps } from './AuthLink.props';
import styles from './AuthLink.module.scss';
import cn from 'classnames';
import { useSession, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';

export const AuthLink = ({ isBurger, ...props }: AuthLinkProps): JSX.Element => {

	const pathname = usePathname();

	const {status} = useSession();

	return (
		<div
			className={styles.container}
			{...props}
		>
			{status === 'unauthenticated'
				? (
					<Link 	
						href='/login' 
						className={cn(styles.link, {
							[styles.isBurger]: isBurger,
							[styles.linkActive]: pathname === '/login'
						})}
					>
						Login
					</Link>
				)
				: (
					<div 
						className={styles.auth}
					>
						<Link 
							href='/write' 
							className={cn(styles.link, {
								[styles.isBurger]: isBurger,
								[styles.linkActive]: pathname === '/write'
							})}
						>
							Write
						</Link>
						<span 
							className={cn(styles.link, {
								[styles.isBurger]: isBurger
							})}
							onClick={() => signOut()}
						>	
							Logout
						</span>
				</div>)
			}
		</div>
	);
};