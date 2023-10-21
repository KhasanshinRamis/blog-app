import { Container } from '@/components';
import styles from './loginPage.module.scss';
import cn from 'classnames';

export default function LoginPage() {
	return (
		<div className={styles.wrapper}>
			<Container className={styles.container}>
				<div className={cn(styles.socialButton, styles.googleButton)}>Войти через Google</div>
				<div className={cn(styles.socialButton, styles.githubButton)}>Войти через Github</div>
			</Container>
		</div>
	);
}