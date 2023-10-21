'use client';

import { MenuBurgerProps } from './MenuBurger.props';
import styles from './MenuBurger.module.scss';
import { useMenuBurger } from '@/store/useMenuBurger';
import cn from 'classnames';

export const MenuBurger = ({ children, ...props }: MenuBurgerProps): JSX.Element => {

	const [isOpened] = useMenuBurger((state) => [state.isOpened]);

	
	return (
		<div
			className={cn(styles.container, {
				[styles.isOpened]: isOpened,
			})}
			{...props}
		>
		
			{ isOpened 
				? <>
					{children}
				</>
				: <div></div>
			}
		
		</div>
	);
};