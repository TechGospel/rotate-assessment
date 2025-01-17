'use client';
import Badge from '@/components/ui/badge';
import { HStack, Text, VStack } from '@chakra-ui/react';
import { CaretUp, ChatCircle } from '@phosphor-icons/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface SuggestionsCardProps {
	title: string;
	description: string;
	tag: string;
	upvotes: number;
	comments: number;
  }

export default function SuggestionCard(props:SuggestionsCardProps) {
	const { resolvedTheme } = useTheme();
	const [theme, setTheme] = useState<string | undefined | null>(null);

	useEffect(() => {
		setTheme(resolvedTheme);
	}, [resolvedTheme]);

	return (
		<HStack
			suppressHydrationWarning
			data-state='open'
			_open={{
				animation: 'fade-in 300ms ease-out',
				transitionDelay: '1000ms',
			}}
			alignItems={'stretch'}
			p='32px'
			gapX={'40px'}
			borderRadius={'10px'}
			bg={{
				base: '#fff',
				_dark: '#333',
			}}
			className='group cursor-pointer'
		>
			<VStack className='!hidden md:!flex'>
				<VStack
					width={'40px'}
					bg={{
						base: '#f2f4fe',
						_dark: '#4661e6',
					}}
					borderRadius={'10px'}
					p='8px'
					fontSize='sm'
					fontWeight={'bold'}
					_hover={{ background: '#CFD7FF' }}
					color={{
						base: 'inherit',
						_dark: 'white',
					}}
					className='transition-all duration-300 cursor-pointer'
				>
					<CaretUp
						weight='bold'
						color={theme === 'light' ? '#4661E6' : '#fff'}
					/>
					{props?.upvotes}
				</VStack>
			</VStack>
			<VStack flex={1} alignItems={'start'} gap={0}>
				<Text
					color={{
						base: '#3a4374',
						_dark: '#fff',
					}}
					className={`font-bold text-lg ${
						theme === 'light'
							? 'group-hover:text-[#4661E6]'
							: 'group-hover:text-[#afbcff]'
					}`}
					transition='color 300ms ease-in-out'
				>
					{props?.title}
				</Text>
				<Text
					color={{
						base: '#647196',
						_dark: '#a6b0cd',
					}}
				>
					{props?.description}
				</Text>
				<HStack flexWrap={'wrap'} gapX={'8px'} mt='5'>
					<Badge>{props?.tag}</Badge>
				</HStack>
				<HStack
					justifyContent={'space-between'}
					mt='5'
					className='!flex md:!hidden w-full'
				>
					<HStack
						bg={{
							base: '#f2f4fe',
							_dark: '#4661e6',
						}}
						borderRadius={'10px'}
						p='8px'
						fontSize='sm'
						fontWeight={'bold'}
						_hover={{ background: '#CFD7FF' }}
						color={{
							base: 'inherit',
							_dark: 'white',
						}}
						className='transition-all duration-300 cursor-pointer'
					>
						<CaretUp
							weight='bold'
							color={theme === 'light' ? '#4661E6' : '#fff'}
						/>
						{props?.upvotes}
					</HStack>
					<HStack
						color={{
							base: 'inherit',
							_dark: '#fff',
						}}
					>
						<ChatCircle weight='fill' color='#CDD2EE' /> {props?.comments}
					</HStack>
				</HStack>
			</VStack>
			<VStack justifyContent={'center'} className='!hidden md:!flex'>
				<HStack
					color={{
						base: 'inherit',
						_dark: '#fff',
					}}
				>
					<ChatCircle weight='fill' color='#CDD2EE' /> {props?.comments}
				</HStack>
			</VStack>
		</HStack>
	);
}
