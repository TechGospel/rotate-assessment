import Menu from '@/components/ui/menu';
import { HStack } from '@chakra-ui/react';
import { CaretDown } from '@phosphor-icons/react';
import { useState } from 'react';

const options = [
	{ label: 'Most Upvotes', value: 'most-upvotes' },
	{ label: 'Least Upvotes', value: 'least-upvotes' },
	{ label: 'Most Comments', value: 'most-comments' },
	{ label: 'Least Comments', value: 'least-comments' },
];
export default function FilterMenu() {
	const [selected, setSelected] = useState<(typeof options)[0] | undefined>(
		options[0]
	);
	function handleSelect(v: string) {
		setSelected(options.find((opt) => opt.value === v));
	}
	return (
		<Menu
			options={options}
			onSelect={(v) => handleSelect(v.value)}
			selected={selected}
		>
			<HStack
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
