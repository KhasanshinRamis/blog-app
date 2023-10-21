'use client';

import { ThemeToggleProps } from './ThemeToggle.props';
import styles from './ThemeToggle.module.scss';
import Image from 'next/image';
import { useContext } from 'react';
import {ThemeContex } from '@/context/ThemeContext/ThemeContex';

export const ThemeToggle = ({ ...props }: ThemeToggleProps): JSX.Element => {

	const {theme, toggleThem} = useContext(ThemeContex);
	

	return (
		<div 
			className={styles.container}
			style={theme === 'dark'
				? { backgroundColor: '#fff'} 
				: { backgroundColor: '#0f172a'}
			}
			onClick={toggleThem}
			{...props}
		>
			<Image src='/moon.png' alt='moon' width={14} height={14}/>
			<div 
				className={styles.ball} 
				style={theme === 'dark'
					? { left:1, background: '#0f172a'} 
					: { right:1, background: '#fff'}
				}
			>
			</div>
			<Image src='/sun.png' alt='sun' width={14} height={14}/>
		</div>
	);
};