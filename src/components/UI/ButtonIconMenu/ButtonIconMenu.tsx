'use client';

import { ButtonIconMenuProps } from './ButtonIconMenu.props';
import styles from './ButtonIconMenu.module.scss';
import { IoMdMenu } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';
import { useMenuBurger } from '@/store/useMenuBurger';


export const ButtonIconMenu = ({ ...props }: ButtonIconMenuProps): JSX.Element => {

	const [isOpened, setIsOpened] = useMenuBurger((state) => [state.isOpened, state.setIsOpened]);

	return (
		<button
			className={styles.container}
			onClick={() => setIsOpened(!isOpened)}
			{...props}
		>
			{isOpened ? <AiOutlineClose/> : <IoMdMenu/>}
		</button>
	);
};