import { Box, Flex } from '@chakra-ui/react';

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

function TerminalOutput() {
  return (
    <Box fontSize={'sm'} color={'var(--dim)'} p={2}>
      Welcome to taskmanager-cli! Type 'help' to get started.
    </Box>
  );
}

function TerminalInput() {
  return (
    <Box>
      <Box fontSize={'sm'} color={'var(--dim)'} bg={'var(--surface2)'} p={2}>
        user@taskmanager:~$
      </Box>
    </Box>
  );
}
