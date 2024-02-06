'use client';

import { useState } from 'react';
import styles from './write.module.scss';
import Image from 'next/image';
import cn from 'classnames';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { Container } from '@/components';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';




export default function WritePage() {

	const { status } = useSession();
	const router = useRouter();


	const [ isOpened, setIsOpened ] = useState<boolean>(false);
	const [ value, setValue ] = useState<string>('');
	const [ file, setFile ] = useState<FileList>();


	if (status === 'loading') {
		return <div className={styles.loading}>Loading...</div>;	
	}

	if (status === 'unauthenticated') {
		router.push('/');
	}	

	return (
		<Container className={styles.container}>
			<input type="text" placeholder='Заголовок' className={styles.input}/>
			<div className={styles.editor}>
				<button className={styles.button}>
					<Image src='/plus.png' alt='Добавить материал' width={16} height={16} onClick={() => setIsOpened(!isOpened)}/>
				</button>
				{isOpened && 
					<div className={styles.add}>
						<input 
							type="file"
							id='image' 
							onChange={(event) => setFile(event.target.files[0])}
							style={{display: 'none'}}
						/>

						<button className={cn(styles.button, styles.addButton)}>
							<label htmlFor="image">
								<Image src='/image.png' alt='Добавить изображение' width={16} height={16} />
							</label>
						</button>

						<button className={cn(styles.button, styles.addButton)}>
							<Image src='/external.png' alt='Добавить ресурс' width={16} height={16} />
						</button>
						
						<button className={cn(styles.button, styles.addButton)}>
							<Image src='/video.png' alt='Добавить видео' width={16} height={16} />
						</button>
					</div>
				}
				<ReactQuill 
					theme='bubble' 
					value={value} 
					onChange={setValue} 
					placeholder='Расскажи свою историю...'
					className={styles.textArea}
				/>
			</div>
			<button className={styles.publish}>Отправить</button>
		</Container>
	);
}