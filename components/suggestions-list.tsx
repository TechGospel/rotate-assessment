import SuggestionCard from '@/components/suggestion-card';
import { VStack } from '@chakra-ui/react';
import {useFeature} from '@/app/hooks/useHooks'



export default function SuggestionsList() {
	const {
		suggestions
	  } = useFeature();
	return (
		<VStack gapY={'20px'} alignItems='stretch' className='p-8 md:p-0'>
			{suggestions.map((item, i) => (
				<SuggestionCard key={i} {...item} />
			))}
		</VStack>
	);
}
