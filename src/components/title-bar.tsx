import { Box, HStack, Text } from '@chakra-ui/react';

export function TitleBar() {
  return (
    <HStack justifyContent={'space-between'} px={4} py={2}>
      <Dots />
      <Text fontSize={'sm'} style={{ fontWeight: 'bold', color: 'var(--dim)' }}>
        taskmanager-cli - bash
      </Text>
      <div>
        <Box borderWidth="2px" fontSize={'xs'} p={'2'} borderRadius={'md'} bg={'var(--bg)'}>
          1 pending
        </Box>
      </div>
    </HStack>
  );
}

const Dots = () => {
  return (
    <HStack>
      <Box w={'14px'} h={'14px'} borderRadius={'50%'} backgroundColor={'red.500'}></Box>
      <Box w={'14px'} h={'14px'} borderRadius={'50%'} backgroundColor={'yellow.500'}></Box>
      <Box w={'14px'} h={'14px'} borderRadius={'50%'} backgroundColor={'green.500'}></Box>
    </HStack>
  );
};
