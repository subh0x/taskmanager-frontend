import { Box, Flex, Input, InputGroup, Text } from '@chakra-ui/react';

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
      <Text>Welcome to taskmanager-cli! Type 'help' to get started.</Text>
      
    </Box>
  );
}

function TerminalInput() {
  return (
    <Box>
      <Box fontSize={'sm'} color={'var(--dim)'} bg={'var(--surface2)'} p={2}>
        <InputGroup startElement={<Text ml={2} color={'var(--prompt)'} fontWeight={'bold'}>user@taskmanager: ~$</Text>}>
            <Input ps={"22ch"} color={'var(--text)'} fontWeight={'bold'}/>
        </InputGroup>
      </Box>
    </Box>
  );
}
