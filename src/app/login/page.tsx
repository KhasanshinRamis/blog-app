'use client';

import { Container } from '@/components';
import styles from './loginPage.module.scss';
import cn from 'classnames';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {

	const {data, status} = useSession();
	const router = useRouter();

	if (status === 'loading') {
		return <div className={styles.loading}>Loading...</div>;	
	}

	if (status === 'authenticated') {
		router.push('/');
	}

	return (
		<div className={styles.wrapper}>
			<Container className={styles.container}>
				<div className={cn(styles.socialButton, styles.googleButton)} onClick={() => signIn('google')}>Войти через Google</div>
				<div className={cn(styles.socialButton, styles.githubButton)}>Войти через Github</div>
			</Container>
		</div>
	);
}