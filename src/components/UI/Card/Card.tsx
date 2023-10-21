import { CardProps } from './Card.props';
import styles from './Card.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export const Card = ({ pathImage, ...props }: CardProps): JSX.Element => {
	return (
		<div
			className={styles.container}
			{...props}
		>
			<div className={styles.imageContainer}>
				<Image src={pathImage} alt='river' fill className={styles.image}/>
			</div>

			<div className={styles.textContainer}>
				<div className={styles.details}>
					<span className={styles.date}>11.10.2023 - </span>
					<span className={styles.category}>Culture</span>
				</div>
				<Link href='/'>
					<h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
				</Link>
				<p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium facilis inventore eius corrupti omnis natus totam ducimus tenetur, voluptate odit.</p>
				<Link href='/' className={styles.link}>Read More</Link>
			</div>
		</div>
	);
};