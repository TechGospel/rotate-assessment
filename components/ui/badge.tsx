import { BadgeProps, Badge as ChakraBadge } from '@chakra-ui/react';

interface IBadge extends BadgeProps {
	active?: boolean;
}

export default function Badge({ active, className, ...props }: IBadge) {
	return (
		<ChakraBadge
			background={{
				base: active ? '#4661E6' : '#F2F4FF',
				_dark: active ? '#fff' : '#333',
			}}
			color={{
				base: active ? '#fff' : '#4661E6',
				_dark: active ? '#000' : '#ADD8E6',
			}}
			border={{
				base: 'transparent',
				_dark: '1px solid #666',
			}}
			py={'5px'}
			px={'16px'}
			fontWeight={'semibold'}
			fontSize={'13px'}
			borderRadius={'10px'}
			_hover={{
				background: {
					base: '#CFD7FF',
					_dark: '#444',
				},
			}}
			className={`transition-all duration-300 cursor-pointer ${className}`}
			{...props}
		/>
	);
}
