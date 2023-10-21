import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface ButtonIconMenuProps extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref'> {

}