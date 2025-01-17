import { ColorModeButton } from '@/components/ui/color-mode';
import { HStack } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IPageHeader {
	right?: ReactNode;
	left?: ReactNode;
	children?: ReactNode;
	title?: string;
}

export default function PageHeader({
	right,
	left,
	title,
	children,
}: IPageHeader) {
	return (
		<HStack
			bg={'#373F68'}
			px='16px'
			py='14px'
			color='white'
			className='md:rounded-[10px]'
		>
			<HStack flex={1} alignItems={'center'} gapX={'18px'}>
				<span className='hidden md:block'>{left}</span>
				<div className='font-bold text-lg hidden md:block'>{title}</div>
				<div className='md:px-5'>{children}</div>
			</HStack>
			<ColorModeButton />
			{right}
		</HStack>
	);
}
