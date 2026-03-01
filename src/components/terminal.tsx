import { Box, Flex } from '@chakra-ui/react';
import { TerminalOutput } from './terminal-output';
import { TerminalInput } from './terminal-input';

export function Terminal() {
  return (
    <Flex height={'100%'} maxHeight={'800px'} flexDirection={'column'}>
      <Box flex={1} overflowY={'auto'}>
        <TerminalOutput />
      </Box>
      <Box position={'sticky'} bottom={0} flexShrink={0}>
        <TerminalInput />
      </Box>
    </Flex>
  );
}