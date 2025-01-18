'use client';
import Main from '@/components/main';
import PageHeader from '@/components/page-header';
import Sidebar from '@/components/sidebar';
import SuggestionsList from '@/components/suggestions-list';
import { Button } from '@/components/ui/button';
import FilterMenu from '@/components/filter-menu';
import { VStack, Box } from '@chakra-ui/react';
import { Plus } from '@phosphor-icons/react';
import Image from 'next/image';
import {useFeature} from './hooks/useHooks';
import EmptyState from '@/components/ui/empty';

export default function Home() {
	const{suggestions}= useFeature()
	return (
		<>
			<Sidebar />
			<Main>
				<VStack gapY={{ base: '0px', md: '24px' }} alignItems='stretch'>
					<PageHeader
						left={
							<Image
								src={'/images/bulb.png'}
								height={24}
								width={23}
								alt='Bulb'
							/>
						}
						title={`${suggestions.length} Suggestions`}
						right={
							<Button>
								<Plus weight='bold' /> Add Feedback
							</Button>
						}
					>
						<FilterMenu />
					</PageHeader>
					<SuggestionsList  />
					<Box mt={4}>{suggestions.length === 0 && <EmptyState />}</Box>
				</VStack>
			</Main>
		</>
	);
}
