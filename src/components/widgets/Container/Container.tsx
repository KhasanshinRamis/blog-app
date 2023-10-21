'use client';

import { ContainerProps } from './Container.props';
import { useMenuBurger } from '@/store/useMenuBurger';
import styles from './Container.module.scss';
import cn from 'classnames';

export const Container = ({ children, ...props }: ContainerProps): JSX.Element => {
	
	const [isOpened] = useMenuBurger((state) => [state.isOpened]);

	return (
		<div
			className={cn({[styles.hidden]: isOpened})}
			{...props}
		>
			{children}
		</div>
	);
};