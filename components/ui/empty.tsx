import { Box, Button, Text } from '@chakra-ui/react';
import Image from 'next/image';

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
      <Text textStyle='h1'>There is no Feedback yet</Text>
      <Box width='80%' my={4}>
        <Text textStyle='body1'>
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </Text>
      </Box>
      <Button>+ Add Feedback</Button>
    </Box>
  );
};

export default EmptyState;
