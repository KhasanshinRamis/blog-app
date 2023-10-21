import { FeatureProps } from './Feature.props';
import styles from './Feature.module.scss';
import Image from 'next/image';

export const Feature = ({ ...props }: FeatureProps): JSX.Element => {
	return (
		<div
			className={styles.container}
			{...props}
		>
			<h1 
				className={styles.title}
			>
				<b className={styles.bold}>Добро пожаловать в наш блог по эстетике!</b><br/>Наслаждайтесь историями и творческими идеями.
			</h1>
			<div 
				className={styles.post}
			>
				<div
					className={styles.imgContainer}
				>
					<Image 
						src='/p1.jpg' 
						alt='Nature' 
						fill
						className={styles.image}
					/>
				</div>

				<div
					className={styles.textContainer}
				>
					<h1 className={styles.postTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, vitae.</h1>
					<p className={styles.postDescription}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
						Ea suscipit ullam reprehenderit ut odit quis. Quam, expedita labore.
						Ratione doloribus dignissimos rem, et odio placeat facilis sunt reiciendis dolorem?
						Inventore.
					</p>
					<button className={styles.button}>Read More</button>
				</div>
			</div>
		</div>
	);
};