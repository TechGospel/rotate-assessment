import { useFeature } from '@/app/hooks/useHooks';
import Menu from '@/components/ui/menu';
import { HStack } from '@chakra-ui/react';
import { CaretDown } from '@phosphor-icons/react';
import { useCallback, useMemo, useState } from 'react';

const options = [
	{ label: 'Most Upvotes', value: 'most-upvotes' },
	{ label: 'Least Upvotes', value: 'least-upvotes' },
	{ label: 'Most Comments', value: 'most-comments' },
	{ label: 'Least Comments', value: 'least-comments' },
];
export default function FilterMenu() {
	const { handleSortSuggestions } = useFeature();
	
	const defaultOption = useMemo(() => options[0], []);
	const [selected, setSelected] = useState<typeof options[number]>(defaultOption);

	const handleSelect = useCallback(
		(selectedOption: { value: string }) => {
			const newSelected = options.find((opt) => opt.value === selectedOption.value);
			if (newSelected && newSelected.value !== selected.value) {
				setSelected(newSelected);
				handleSortSuggestions(newSelected.value);
			}
		},
		[selected, handleSortSuggestions]
	);

	
	return (
		<Menu
			options={options}
			onSelect={handleSelect}
			selected={selected}
		>
			<HStack
				aria-label="Sort options"
				className='text-sm'
				transition='opacity 200ms ease-in-out'
				_hover={{ opacity: 0.4 }}
			>
				<span className='hidden md:block'>Sort by: </span>
				<div className='font-bold'>{selected?.label}</div>{' '}
				<CaretDown weight='bold' />
			</HStack>
		</Menu>
	);
}
