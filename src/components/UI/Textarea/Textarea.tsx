import { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.scss';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';


export const Textarea = forwardRef(({   className, ...props}: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
	return (
		<div className={cn(className, styles.container)}>
			<textarea
				className={cn(styles.textarea)}
				ref={ref}
				{...props}
			/>
		</div>
	);
});