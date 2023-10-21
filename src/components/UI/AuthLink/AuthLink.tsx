'use client';

import Link from 'next/link';
import { AuthLinkProps } from './AuthLink.props';
import styles from './AuthLink.module.scss';
import cn from 'classnames';

export const AuthLink = ({ isBurger, ...props }: AuthLinkProps): JSX.Element => {

	const status = 'authenticated';

	return (
		<div
			className={styles.container}
			{...props}
		>
			{status === 'notauthenticated'
				? (
					<Link 	
						href='/login' 
						className={cn(styles.link, {
							[styles.isBurger]: isBurger
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
								[styles.isBurger]: isBurger
							})}
						>
							Write
						</Link>
						<span 
							className={cn(styles.link, {
								[styles.isBurger]: isBurger
							})}
						>	
							Logout
						</span>
				</div>)
			}
		</div>
	);
};