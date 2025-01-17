import type { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';
import {
	AbsoluteCenter,
	Button as ChakraButton,
	Span,
	Spinner,
} from '@chakra-ui/react';
import * as React from 'react';

interface ButtonLoadingProps {
	loading?: boolean;
	loadingText?: React.ReactNode;
}

export interface ButtonProps extends ChakraButtonProps, ButtonLoadingProps {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	function Button(props, ref) {
		const { loading, disabled, loadingText, children, ...rest } = props;
		return (
			<ChakraButton
				background={'#AD1FEA'}
				color='white'
				px={{ base: '15px', md: '25px' }}
				fontWeight={'bold'}
				fontSize={'sm'}
				h={{ base: '35px', md: '44px' }}
				borderRadius={'10px'}
				disabled={loading || disabled}
				transition={'all 200ms ease-in-out'}
				_hover={{ opacity: '0.75' }}
				ref={ref}
				{...rest}
			>
				{loading && !loadingText ? (
					<>
						<AbsoluteCenter display='inline-flex'>
							<Spinner size='inherit' color='inherit' />
						</AbsoluteCenter>
						<Span opacity={0}>{children}</Span>
					</>
				) : loading && loadingText ? (
					<>
						<Spinner size='inherit' color='inherit' />
						{loadingText}
					</>
				) : (
					children
				)}
			</ChakraButton>
		);
	}
);
