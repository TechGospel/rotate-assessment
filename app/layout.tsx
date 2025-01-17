import { Provider } from '@/components/ui/provider';
import { Box } from '@chakra-ui/react';
import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import './globals.css';
import { FeatureProvider } from './hooks/useHooks';


const jost = Jost({
	variable: '--font-jost',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Frontend Mentor Dashboard Rotate Task',
  description: "Explore Faith Adeoti's solution for Rotate's Senior Frontend Developer Interview, showcasing expertise in building responsive, user-friendly, and high-performance web applications.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${jost.variable} antialiased light`}>
				<Provider>
					<FeatureProvider>
						<Box
							className='w-full'
							bg={{ base: '#F7F8FD', _dark: '#000' }}
						>
							<div
								id='pageLayout'
								className='flex flex-col lg:flex-row md:gap-[30px] page-layout'
							>
								{children}
							</div>
						</Box>
					</FeatureProvider>
				</Provider>
				
			</body>
		</html>
	);
}
