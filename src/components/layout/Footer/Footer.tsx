import { FooterProps } from './Footer.props';
import styles from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
	return (
		<footer
		className={styles.container}
			{...props}
		>
			<div className={styles.info}>
				<div className={styles.logo}>
					<Image src='/p1.jpg' alt='Logotype' width={50} height={50} className={styles.image}/>
					<h1 className={styles.logoText}>Взгляды и перспективы</h1>
				</div>
				<p className={styles.decription}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reiciendis quod laboriosam itaque asperiores minus deserunt repellat illum quas ea.
				</p>

				<div className={styles.social}>
					<Image src='/facebook.png' alt='facebook' width={18} height={18}/>
					<Image src='/instagram.png' alt='instagram' width={18} height={18}/>
					<Image src='/tiktok.png' alt='tiktok' width={18} height={18}/>
					<Image src='/youtube.png' alt='youtube' width={18} height={18}/>
				</div>
			</div>

			<div className={styles.links}>
				<div className={styles.list}>
					<span className={styles.listTitle}>Links</span>
					<Link href='/'>Homepage</Link>
					<Link href='/'>Blog</Link>
					<Link href='/'>Contact</Link>
					<Link href='/'>About</Link>
				</div>

				<div className={styles.list}>
					<span className={styles.listTitle}>Tags</span>
					<Link href='/'>Style</Link>
					<Link href='/'>Fashion</Link>
					<Link href='/'>Coding</Link>
					<Link href='/'>Travel</Link>
				</div>

				<div className={styles.list}>
					<span className={styles.listTitle}>Social</span>
					<Link href='/'>Facebook</Link>
					<Link href='/'>Instagram</Link>
					<Link href='/'>Tiktok</Link>
					<Link href='/'>Youtube</Link>
				</div>
			</div>
		</footer>
	);
};