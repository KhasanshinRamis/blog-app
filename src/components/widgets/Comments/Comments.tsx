'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Comments.module.scss';
import { CommentsProps } from './Comments.props';
import { Textarea } from '@/components';
import { useSession } from 'next-auth/react';
import { IComment } from '@/interfaces/comment.interface';
import { useEffect, useState } from 'react';
import { useComments } from '@/store/useComments';




export const Comments = ({ postSlug, ...props }: CommentsProps): JSX.Element => {
	
	const { status } = useSession();
	const [ comments, getComments ] = useComments((state) => [state.comments, state.getComments]);
	const [description, setDescription] = useState<string>('');

	const handleSubmit = async () => {
		await fetch('/api/comments', {
			method: 'POST',
			body: JSON.stringify({ description, postSlug})
		});
	};

	useEffect(() => {
		getComments(postSlug);
	}, [comments]);



	return (
		<div className={styles.container} {...props}>
			<h1 className={styles.title}>Комментарии</h1>
			{ status === 'authenticated' ? (
				<div className={styles.write}>
					<Textarea
						placeholder='Напишите комментарии...'
						value={description}
						onChange={(event) => setDescription(event.target.value)}
					/>
					<button onClick={handleSubmit} className={styles.button}>Комментировать</button>
				</div> 
				) : (
					<Link href='/login'>Login to write a comment</Link>
			)}
				<div className={styles.comments}>
					{comments && comments.map((comment: IComment) => (
						<div className={styles.comment} key={comment._id}>
							<div className={styles.user}>
								
								{comment?.user?.image && 
									<Image 
										src={comment?.user?.image} 
										alt={comment?.user?.name} 
										width={50} 
										height={50} 
										className={styles.image}
									/>
								}
								<div className={styles.userInfo}>
									<span className={styles.username}>{comment?.user?.name}</span>
									<span className={styles.date}>{comment?.createdAt}</span>
								</div>
							</div>
							<p className={styles.commentText}>{comment?.description}</p>
						</div>
					))}
				</div>		
		</div>
	);
};

