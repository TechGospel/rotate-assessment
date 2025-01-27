import type { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';
import {
	AbsoluteCenter,
	Button as ChakraButton,
	Spinner,
	Span,
} from '@chakra-ui/react';
import * as React from 'react';

interface ButtonLoadingProps {
	loading?: boolean;
	loadingText?: string;
}

export interface ButtonProps extends ChakraButtonProps, ButtonLoadingProps {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	function Button(props, ref) {
		const {
			loading = false,
			loadingText = '',
			disabled,
			children,
			bg = '#AD1FEA',
			...rest
		} = props;


		const buttonContent = React.useMemo(() => {
			if (loading && !loadingText) {
				return (
					<>
						<AbsoluteCenter display='inline-flex'>
							<Spinner size='inherit' color='inherit' />
						</AbsoluteCenter>
						<Span opacity={0}>{children}</Span>
					</>
				);
			}
			if (loading && loadingText) {
				return (
					<>
						<Spinner size='inherit' color='inherit' />
						{loadingText}
					</>
				);
			}
			return children;
		}, [loading, loadingText, children]);

		return (
			<ChakraButton
				bg={bg}
				color='white'
				px={{ base: '15px', md: '25px' }}
				fontWeight='bold'
				fontSize='sm'
				h={{ base: '35px', md: '44px' }}
				borderRadius='10px'
				disabled={loading || disabled}
				transition='all 200ms ease-in-out'
				_hover={{ opacity: 0.75 }}
				ref={ref}
				aria-busy={loading}
				{...rest}
			>
				{buttonContent}
			</ChakraButton>
		);
	}
);
