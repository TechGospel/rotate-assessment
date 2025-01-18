import { Box, Text } from '@chakra-ui/react';
import { Plus } from '@phosphor-icons/react';
import Image from 'next/image';
import { Button } from './button';

const EmptyState = () => {
  return (
    <Box
      display='flex'
      textAlign='center'
      flexDirection='column'
      alignItems='center'
      py={20}
      bgColor='#fff'
      borderRadius='10px'
    >
      <Image src='/empty-state.svg' alt='' width='130' height='137' />
      <Text fontFamily= 'Jost, sans-serif'
      fontWeight= 'bold'
      fontSize= '24px'
      lineHeight= '35px'
      letterSpacing= '-0.33px'>There is no Feedback yet</Text>
      <Box width='80%' my={4}>
        <Text fontFamily= 'Jost, sans-serif'
      fontWeight= 'normal'
      fontSize= '16px'
      lineHeight= '23px'
      color= '#647196'>
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </Text>
      </Box>
      <Button>
		<Plus weight='bold' /> Add Feedback
	 </Button>
    </Box>
  );
};

export default EmptyState;
