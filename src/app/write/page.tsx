'use client';

import { useEffect, useState } from 'react';
import styles from './write.module.scss';
import Image from 'next/image';
import cn from 'classnames';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { Container } from '@/components';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
  } from "firebase/storage";
import { app } from '@/utils/firebase';




export default function WritePage() {

	const { status } = useSession();
	const router = useRouter();


	const [ isOpened, setIsOpened ] = useState<boolean>(false);
	const [ value, setValue ] = useState<string>('');
	const [ file, setFile ] = useState(null);
	const [ media, setMedia ] = useState("");
	const [ title, setTitle ] = useState("");


	useEffect(() => {
		const storage = getStorage(app);
		const upload = () => {
			const name = new Date().getTime() + file.name;
			const storageRef = ref(storage, name);

			const uploadTask = uploadBytesResumable(storageRef, file);

			uploadTask.on(
			"state_changed",
			(snapshot) => {
				const progress =
				(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				console.log("Upload is " + progress + "% done");
				switch (snapshot.state) {
				case "paused":
					console.log("Upload is paused");
					break;
				case "running":
					console.log("Upload is running");
					break;
				}
			},
			(error) => {},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
				setMedia(downloadURL);
				});
			}
			);
		};

		file && upload();
	}, [file]);

	if (status === 'loading') {
		return <div className={styles.loading}>Loading...</div>;	
	} else if (status === 'unauthenticated') {
		router.push('/');
	}	

	const slugify = (str: string) => str.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");

	console.log(media);

	const handleSubmit = async () => {
		const res = await fetch("/api/posts", {
			method: "POST",
			body: JSON.stringify({
				title,
				description: value,
				img: media,
				slug: slugify(title),
				categorySlug: 'style',
			})
		});
		console.log(res);
	};
	
	return (
		<Container className={styles.container}>
			<input type="text" placeholder='Заголовок' className={styles.input} onChange={(event) => setTitle(event.target.value)}/>
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
							// style={{display: 'none'}}
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
			<button className={styles.publish} onClick={handleSubmit}>Отправить</button>
		</Container>
	);
}