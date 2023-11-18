import { Navbar, Footer } from '@/components';
import './globals.css';
import type { Metadata } from 'next';
import { Titillium_Web } from 'next/font/google';
import { ThemeContextProvider } from '@/context/ThemeContext/ThemeContex';
import { ThemeProvider } from '@/providers/ThemeProvider/ThemeProvider';
import { AuthProvider } from '@/providers/AuthProvider/AuthProvider';


const titillium = Titillium_Web({
	weight: ['300', '400', '600', '700'], 
	subsets: ['latin'],
	variable: '--titillium',
});


export const metadata: Metadata = {
	title: `Blog App`,
	description: `Description about this page`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={titillium.variable}>
				<AuthProvider>
					<ThemeContextProvider>
						<ThemeProvider>	
							<div className='wrapper'>
								<div className='container'>
									<Navbar id='navbar'/>
									<main id='body'>{children}</main>
									<Footer id='footer'/>
								</div>
							</div>
						</ThemeProvider>
					</ThemeContextProvider>
				</AuthProvider>
			</body>

		</html>
	);
}
