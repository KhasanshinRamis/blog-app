import { MenuPostsProps } from './MenuPosts.props';
import styles from './MenuPosts.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

export const MenuPosts = ({withImage, ...props }: MenuPostsProps): JSX.Element => {
	return (
		<div 
			className={styles.items} 
			{...props}
		>
			<Link href='/' className={cn(styles.item, {
				[styles.itemWithImage]: withImage
			})}>
				{withImage && <div className={styles.imageContainer}>
					<Image src='/p2.jpg' alt='river' fill className={styles.image}/>
				</div>}
				<div className={styles.textContainer}>
					<span className={cn(styles.category, styles.travel)}>
						Travel
					</span>
					<h3 className={styles.postTitle}>
						Lorem ipsum dolor sit amet, consectetur adipisicing.
					</h3>
					<div className={styles.detail}>
						<span className={styles.username}>John Doe </span>
						<span className={styles.date}>10.10.2023</span>

					</div>
				</div>
			</Link>

			<Link href='/' className={cn(styles.item, {
				[styles.itemWithImage]: withImage
			})}>
				{withImage && <div className={styles.imageContainer}>
					<Image src='/p3.jpg' alt='river' fill className={styles.image}/>
				</div>}
				<div className={styles.textContainer}>
					<span className={cn(styles.category, styles.culture)}>
						Culture
					</span>
					<h3 className={styles.postTitle}>
						Lorem ipsum dolor sit amet, consectetur adipisicing.
					</h3>
					<div className={styles.detail}>
						<span className={styles.username}>John Doe </span>
						<span className={styles.date}>10.10.2023</span>

					</div>
				</div>
			</Link>

			<Link href='/' className={cn(styles.item, {
				[styles.itemWithImage]: withImage
			})}>
				{withImage && <div className={styles.imageContainer}>
					<Image src='/p4.jpg' alt='river' fill className={styles.image}/>
				</div>}
				<div className={styles.textContainer}>
					<span className={cn(styles.category, styles.food)}>
						Food
					</span>
					<h3 className={styles.postTitle}>
						Lorem ipsum dolor sit amet, consectetur adipisicing.
					</h3>
					<div className={styles.detail}>
						<span className={styles.username}>John Doe </span>
						<span className={styles.date}>10.10.2023</span>

					</div>
				</div>
			</Link>

			<Link href='/' className={cn(styles.item, {
				[styles.itemWithImage]: withImage
			})}>
				{withImage && <div className={styles.imageContainer}>
					<Image src='/p5.jpg' alt='river' fill className={styles.image}/>
				</div>}
				<div className={styles.textContainer}>
					<span className={cn(styles.category, styles.fashion)}>
						Fashion
					</span>
					<h3 className={styles.postTitle}>
						Lorem ipsum dolor sit amet, consectetur adipisicing.
					</h3>
					<div className={styles.detail}>
						<span className={styles.username}>John Doe </span>
						<span className={styles.date}>10.10.2023</span>

					</div>
				</div>
			</Link>

			<Link href='/' className={cn(styles.item, {
				[styles.itemWithImage]: withImage
			})}>
				{withImage && <div className={styles.imageContainer}>
					<Image src='/p6.jpg' alt='river' fill className={styles.image}/>
				</div>}
				<div className={styles.textContainer}>
					<span className={cn(styles.category, styles.coding)}>
						Coding
					</span>
					<h3 className={styles.postTitle}>
						Lorem ipsum dolor sit amet, consectetur adipisicing.
					</h3>
					<div className={styles.detail}>
						<span className={styles.username}>John Doe </span>
						<span className={styles.date}>10.10.2023</span>
					</div>
				</div>
			</Link>

			<Link href='/' className={cn(styles.item, {
				[styles.itemWithImage]: withImage
			})}>
				{withImage && <div className={styles.imageContainer}>
					<Image src='/p7.jpg' alt='river' fill className={styles.image}/>
				</div>}
				<div className={styles.textContainer}>
					<span className={cn(styles.category, styles.style)}>
						Style
					</span>
					<h3 className={styles.postTitle}>
						Lorem ipsum dolor sit amet, consectetur adipisicing.
					</h3>
					<div className={styles.detail}>
						<span className={styles.username}>John Doe </span>
						<span className={styles.date}>10.10.2023</span>
					</div>
				</div>
			</Link>
		</div>
	);
};