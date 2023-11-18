import { Comments, Container, Menu } from '@/components';
import styles from './SinglePage.module.scss';
import Image from 'next/image';


export default function SinglePage() {
	return (
		<Container className={styles.container}>
			<div className={styles.infoContainer}>
				<div className={styles.textContainer}>
					<h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
					<div className={styles.user}>
						<div className={styles.userImageContainer}>
							<Image src='/p1.jpg' alt='' fill className={styles.avatar}/>
						</div>
						<div className={styles.userTextContainer}>
							<span className={styles.username}>John Doe</span>
							<span className={styles.date}>01.01.2024</span>
						</div>
					</div>
				</div>
				<div className={styles.imageContainer}>
					<Image src='/p1.jpg' alt='' fill className={styles.image}/>
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.post}>
					<div className={styles.description}>
						<p className={styles.text}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia pariatur voluptates dolorum sunt ratione eum quo reprehenderit alias amet dolore dolorem ipsum error placeat, nostrum id sed ducimus molestias perferendis recusandae quis quam itaque. Quibusdam provident facere perferendis. Officiis quidem culpa rem distinctio quo? Dicta, libero. Pariatur quo rem blanditiis?	
						</p>	
						<h2>Lorem ipsum dolor sit amet.</h2>
						<p className={styles.text}>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, harum nostrum odio maiores, aliquid tempore molestiae reprehenderit fuga accusamus laudantium quasi corrupti nesciunt. Placeat, doloremque. Quod magni necessitatibus omnis? Corporis, distinctio dolores! Natus, corporis? Harum voluptate, veritatis itaque quia nihil, facilis nulla minima, quae provident perferendis a. Recusandae fugiat dignissimos error maxime molestias quas quibusdam. Nulla odit unde necessitatibus libero dolorem amet atque, officia inventore reprehenderit tempore non obcaecati illo? Magnam cum nam maxime consequuntur? Ipsa quam blanditiis dolorum dolores.
						</p>
					</div>
					<div className={styles.comment}>
						<Comments/>
					</div>
				</div>
				<Menu/>
			</div>
		</Container>
	);
}