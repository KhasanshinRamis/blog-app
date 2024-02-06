'use client';

import { Container, Menu } from '@/components';
import { Comments } from '@/components/widgets/Comments/Comments';
import styles from './SinglePage.module.scss';
import Image from 'next/image';
import { useEffect } from 'react';
import { usePosts } from '@/store/usePosts';


export default function SinglePage({ params }: any) {
	const { slug } = params;

	const [posts, getPosts, getPostBySlug, curSlug] = usePosts((state) => [state.posts, state.getPosts, state.getPostBySlug, state.curSlug]);

	const page = Math.floor(curSlug / 4) + 1;  

	useEffect(() => {
		getPostBySlug(slug);
		getPosts(page, '');
	}, [slug, posts]);


	const post = posts[(curSlug % 4) - 1];

	console.log(post);
	

	return (
		<Container className={styles.container}>
			<div key={post?._id}>
				<div className={styles.infoContainer}>
					<div className={styles.textContainer}>
						<h1 className={styles.title}>{post?.title}</h1>
						<div className={styles.user}>
							<div className={styles.userImageContainer}>
								{posts?.img && <Image src={post?.img} alt={post?.title} fill className={styles.avatar} />}
								{post?.user?.image && <Image src={post?.user?.image} alt={post?.user?.name} fill className={styles.avatar}/>}
							</div>
							<div className={styles.userTextContainer}>
								<span className={styles.username}>{post?.userEmail}</span>
								<span className={styles.username}>{post?.user?.name}</span>
								<span className={styles.date}>{post?.createdAt}</span>
							</div>
						</div>
					</div>
					<div className={styles.imageContainer}>
						{post?.img && <Image src={post?.img} alt={post?.title} fill className={styles.image} />}
					</div>
				</div>
				<div className={styles.content}>
					<div className={styles.post}>
						<div className={styles.description} dangerouslySetInnerHTML={{ __html: post?.description }} />
						<div className={styles.comment}>
							<Comments postSlug={curSlug}/>
						</div>
					</div>
					<Menu />
				</div>
			</div>
		</Container>
	);
}