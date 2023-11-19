'use client';

import { Comments, Container, Menu } from '@/components';
import styles from './SinglePage.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { usePosts } from '@/store/usePosts';
import { IPost } from '@/interfaces/post.interface';


export default function SinglePage({ params }: any) {
	const { slug } = useParams();
	
	const [postItem, setPostItem] = useState<IPost | null>(null);

	const [posts, getPostBySlug] = usePosts((state) => [state.posts, state.getPostBySlug]);

	useEffect(() => {
		getPostBySlug(slug);
	}, [slug]);

	useEffect(() => {
	if (posts && slug) {
		const post = posts.find((p: IPost, index: number) => index === +slug - 1);
		if (post) {
			setPostItem(post);
		}
	}
  }, [posts, slug]);

	return (
		<Container className={styles.container}>
			{posts && (
				<div key={postItem?._id}>
					<div className={styles.infoContainer}>
						<div className={styles.textContainer}>
							<h1 className={styles.title}>{postItem?.title}</h1>
							<div className={styles.user}>
								<div className={styles.userImageContainer}>
									{postItem?.img && <Image src={postItem?.img} alt={postItem?.title} fill className={styles.avatar}/>}
									{/* {postItem?.user.image && <Image src={postItem?.user.image} alt={postItem?.user.name} fill className={styles.avatar}/> */}
								</div>
								<div className={styles.userTextContainer}>
									<span className={styles.username}>{postItem?.userEmail}</span>
									{/* <span className={styles.username}>{postItem?.user.name}</span> */}
									<span className={styles.date}>{postItem?.createdAt}</span>
								</div>
							</div>
						</div>
						<div className={styles.imageContainer}>
							{postItem?.img && <Image src={postItem?.img} alt={postItem?.title} fill className={styles.image}/>}
						</div>
					</div>
					<div className={styles.content}>
						<div className={styles.post}>
							<div className={styles.description} dangerouslySetInnerHTML={{__html: postItem?.description}}/>
							<div className={styles.comment}>
								<Comments/>
							</div>
						</div>
						<Menu/>
					</div>
				</div>
			)}
		</Container>
	);
}