import { CardProps } from './Card.props';
import styles from './Card.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export const Card = ({ post, ...props }: CardProps): JSX.Element => {
	return (
		<div className={styles.container} {...props}>
		
			<div className={styles.imageContainer}>
				{post.img && <Image src={post.img} alt={post.title} fill className={styles.image}/>}
			</div>

			<div className={styles.textContainer}>
				<div className={styles.details}>
					<span className={styles.date}>{post.createdAt.substring(0, 10)} - </span>
					<span className={styles.category}>{post.categorySlug.toUpperCase()}</span>
				</div>
				<Link href={`/posts/${post.slug}`}>
					<h1>{post.title}</h1>
				</Link>
				<p className={styles.description}>{post.description}</p>
				<Link href='/' className={styles.link}>Read More</Link>
			</div>
		</div>
	);
};