import Link from 'next/link';
import Image from 'next/image';
import styles from './Comments.module.scss';
import { CommentsProps } from './Comments.props';
import { Textarea } from '@/components';


export const Comments = ({ ...props }: CommentsProps): JSX.Element => {
	
	const status = 'authenticated';

	return (
		<div className={styles.container} {...props}>
			<h1 className={styles.title}>Комментарии</h1>
			{ status === 'authenticated' 
				? <div className={styles.write}>
					<Textarea
						placeholder='Напишите комментарии...'
					/>
					<button className={styles.button}>Комментировать</button>
				</div> 
				: <div>
					<Link href='/login'>Login to write a comment</Link>
				</div>
			}
			<div className={styles.comments}>
				<div className={styles.comment}>
					<div className={styles.user}>
						<Image 
							src='/p2.jpg' 
							alt='avatar user' 
							width={50} 
							height={50} 
							className={styles.image}
						/>
						<div className={styles.userInfo}>
							<span className={styles.username}>Олег Нечипоренко</span>
							<span className={styles.date}>01.01.2023</span>
						</div>
					</div>
					<p className={styles.commentText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim assumenda aut ullam ipsum placeat corrupti porro. Commodi voluptatibus, voluptatem accusantium placeat molestias incidunt mollitia harum, blanditiis sit qui quasi praesentium?</p>
				</div>
			</div>
		</div>
	);
};