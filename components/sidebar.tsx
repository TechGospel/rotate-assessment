import {useFeature} from '@/app/hooks/useHooks';
import Badge from '@/components/ui/badge';
import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react';
import { List, X } from '@phosphor-icons/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';


export default function Sidebar() {
	const {
		activeSuggestion,
		handleFilterSuggestions,
	  } = useFeature();

	const FILTERS = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'] as const
	const [showNav, setShowNav] = useState(false);
	const toggleNav = () => setShowNav((p) => !p);

	useEffect(() => {
		document.body.classList[showNav ? 'add' : 'remove']('no-scroll');
		return () => document.body.classList.remove('no-scroll');
	}, [showNav]);

	return (
		<div
			className={`flex flex-row lg:flex-col gap-6 items-stretch sidebar relative `}
		>
			<HStack className='lg:h-[137px] bg-custom-radial p-[24px] w-full md:rounded-[10px] flex-1 lg:flex-none overflow-visible custom-class'
			
			>
				<VStack
					justifyContent={'end'}
					alignItems={'start'}
					className='flex-1 !gap-0 md:!gap-[auto] text-white h-full'
				>
					<div className='font-bold text-[15px] md:text-xl'>
						Frontend Mentor
					</div>
					<div className='text-[13px] md:text-base opacity-75'>
						Feedback Board
					</div>
				</VStack>
				<Button
					onClick={toggleNav}
					className='md:hidden !p-0 min-w-max h-auto'
				>
					{showNav ? (
						<X color='white' className='text-xl' />
					) : (
						<List color='white' className='text-xl' />
					)}
				</Button>
			</HStack>

			<Box
				className={`absolute ${
					showNav ? 'left-[0%]' : 'left-full hidden md:flex'
				} top-full right-0 bottom-0 z-10 h-screen md:h-auto md:static flex-[2.8] lg:flex-none transition-all duration-200`}
				bg={{
					base: 'rgba(0,0,0,0.2)',
					_dark: 'rgba(255,255,255,0.3)',
					md: 'transparent',
				}}
				onClick={toggleNav}
			>
				<Box
					bg={{
						base: '#F7F8FD',
						_dark: '#000',
						md: 'transparent',
					}}
					width={{
						base: showNav ? '75%' : '0%',
						md: '100%',
					}}
					transition='width 300ms ease-in-out'
					className='h-screen md:h-auto md:static flex flex-col md:flex-row lg:flex-col gap-6 items-stretch p-6 md:p-0 ml-auto md:ml-0'
				>
					<HStack
						className='flex-none md:flex-1 flex lg:flex-none rounded-[10px] p-[24px]'
						bg={{ base: '#fff', _dark: '#333' }}
					>
						<HStack
							justifyContent={'start'}
							alignItems={'start'}
							flexWrap={'wrap'}
							gapX={'8px'}
							gapY={'16px'}
						>
							{FILTERS.map((item, index) => (

								<Badge
								key={index}
								onClick={() => handleFilterSuggestions(item)}
								active={activeSuggestion==item}
								>
								{item}
								</Badge>

							))}
						</HStack>
					</HStack>

					<VStack
						alignItems={'stretch'}
						gapY={'2'}
						className='flex-none md:flex-1 flex lg:flex-none rounded-[10px] p-[24px]'
						bg={{ base: '#fff', _dark: '#333' }}
					>
						<HStack justifyContent={'space-between'}>
							<Text
								color={{ base: '#3A4374', _dark: '#87CEEB' }}
								className='text-lg font-bold  flex-1'
							>
								Roadmap
							</Text>
							<div>
								<Link href='#' className='text-sm'>
									<Text
										color={{
											base: '#4661E6',
											_dark: '#ADD8E6',
										}}
										_hover={{
											color: {
												base: '#4661E6',
												_dark: '#4661E6',
											},
										}}
									>
										View
									</Text>
								</Link>
							</div>
						</HStack>
						<HStack justifyContent={'space-between'}>
							<HStack gapX={'2'} flex={1}>
								<div className='bg-[#F49F85] h-2 w-2 rounded-full' />
								<Text
									color={{
										base: '#6b7280',
										_dark: '#d1d5db',
									}}
								>
									Planned
								</Text>
							</HStack>
							<Text
								color={{
									base: '#6b7280',
									_dark: '#d1d5db',
								}}
								className='font-bold'
							>
								2
							</Text>
						</HStack>
						<HStack
							justifyContent={'space-between'}
							className='text-gray-500'
						>
							<HStack gapX={'2'} flex={1}>
								<div className='bg-[#AD1FEA] h-2 w-2 rounded-full' />
								<Text
									color={{
										base: '#6b7280',
										_dark: '#d1d5db',
									}}
								>
									In-Progress
								</Text>
							</HStack>
							<Text
								color={{
									base: '#6b7280',
									_dark: '#d1d5db',
								}}
								className='font-bold'
							>
								3
							</Text>
						</HStack>
						<HStack
							justifyContent={'space-between'}
							className='text-gray-500'
						>
							<HStack gapX={'2'} flex={1}>
								<div className='bg-[#62BCFA] h-2 w-2 rounded-full' />
								<Text
									color={{
										base: '#6b7280',
										_dark: '#d1d5db',
									}}
								>
									Live
								</Text>
							</HStack>
							<Text
								color={{
									base: '#6b7280',
									_dark: '#d1d5db',
								}}
								className='font-bold'
							>
								1
							</Text>
						</HStack>
					</VStack>
				</Box>
			</Box>
		</div>
	);
}
