import { Box, Flex, Input, InputGroup, Text } from '@chakra-ui/react';
import { useTerminalStore } from '@/stores/terminal-store';

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
  const { output } = useTerminalStore();

  return (
    <Box fontSize={'sm'} color={'var(--dim)'} p={2}>
      <Text>Welcome to taskmanager-cli! Type 'help' to get started.</Text>
      <Text>{output}</Text>
    </Box>
  );
}

function TerminalInput() {
  const {
    input,
    updateInput,
    clearInput,
    updateOutput,
    cmdHistIdx,
    incCmdHistIdx,
    decCmdHistIdx,
    updateCmdHistIdx,
    cmdHistory,
    updateCmdHistory,
  } = useTerminalStore();
  // const [input, setInput] = useState('');

  return (
    <Box>
      <Box fontSize={'sm'} color={'var(--dim)'} bg={'var(--surface2)'} p={2}>
        <InputGroup
          startElement={
            <Text ml={2} color={'var(--prompt)'} fontWeight={'bold'}>
              user@taskmanager: ~$
            </Text>
          }
        >
          <Input
            ps={'22ch'}
            color={'var(--text)'}
            fontWeight={'bold'}
            value={input}
            onChange={(e) => {
              updateInput(e.currentTarget.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const terminalInputStr = e.currentTarget.value;
                // Send the currentTarget Value for processing the commands and displaying in the output.
                if (terminalInputStr != '') {
                  // setOutput(terminalInputStr);
                  updateOutput(terminalInputStr);
                  // Keep track of the output.
                  // setCmdHistory((prev) => [...prev, terminalInputStr]);
                  updateCmdHistory(terminalInputStr);
                  // setCmdHistIdx((prev) => prev + 1);
                  incCmdHistIdx();
                  // setInput(() => ''); // Clear the input
                  clearInput();
                }
              }

              // Command History:
              // Navigate through the List of Input Commands
              if (e.key === 'ArrowUp') {
                // Allow for the Arrow up commands only till the idx val = 0
                if (cmdHistIdx > 0 && cmdHistIdx <= cmdHistory.length) {
                  decCmdHistIdx();
                  updateInput(cmdHistory[cmdHistIdx] ?? '');
                }
              }

              if (e.key === 'ArrowDown') {
                if (cmdHistIdx < cmdHistory.length - 1) {
                  const nextIdx = cmdHistIdx + 1;
                  incCmdHistIdx();
                  updateInput(cmdHistory[nextIdx] ?? '');
                } else {
                  updateCmdHistIdx(cmdHistory.length);
                  updateInput('');
                }
              }
            }}
          />
        </InputGroup>
      </Box>
    </Box>
  );
}
