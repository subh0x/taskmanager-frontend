import { Box, Flex, Input, InputGroup, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useTerminal } from '@/stores/terminal-store';

export function Terminal() {
  const [output, setOutput] = useState<string>('');
  // Keep track of the commands entered:
  const [cmdHistIdx, setCmdHistIdx] = useState<number>(0);
  const [cmdHistory, setCmdHistory] = useState<string[]>(['']);
  console.log(cmdHistIdx);
  console.log(cmdHistory);

  return (
    <Flex height={'100%'} maxHeight={'800px'} flexDirection={'column'}>
      <Box flex={1} overflowY={'auto'}>
        <TerminalOutput output={output} />
      </Box>
      <Box position={'sticky'} bottom={0} flexShrink={0}>
        <TerminalInput
          setOutput={setOutput}
          setCmdHistory={setCmdHistory}
          cmdHistory={cmdHistory}
          cmdHistIdx={cmdHistIdx}
          setCmdHistIdx={setCmdHistIdx}
        />
      </Box>
    </Flex>
  );
}

function TerminalOutput({ output }) {
  return (
    <Box fontSize={'sm'} color={'var(--dim)'} p={2}>
      <Text>Welcome to taskmanager-cli! Type 'help' to get started.</Text>
      <Text>{output}</Text>
    </Box>
  );
}

function TerminalInput({ setOutput, setCmdHistory, cmdHistory, cmdHistIdx, setCmdHistIdx }) {
  const [input, setInput] = useState('');

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
              setInput(e.currentTarget.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const terminalInputStr = e.currentTarget.value;
                // Send the currentTarget Value for processing the commands and displaying in the output.
                if (terminalInputStr != '') {
                  setOutput(terminalInputStr);
                  // Keep track of the output.
                  setCmdHistory((prev) => [...prev, terminalInputStr]);
                  setCmdHistIdx((prev) => prev + 1);
                  setInput(() => ''); // Clear the input
                }
              }

              // Command History:
              // Navigate through the List of Input Commands
              if (e.key === 'ArrowUp') {
                // Allow for the Arrow up commands only till the idx val = 0
                if (cmdHistIdx > 0 && cmdHistIdx <= cmdHistory.length) {
                  const prevIdx = cmdHistIdx - 1;
                  setCmdHistIdx(prevIdx);
                  setInput(cmdHistory[cmdHistIdx] ?? '');
                }
              }

              if (e.key === 'ArrowDown') {
                if (cmdHistIdx < cmdHistory.length - 1) {
                  const nextIdx = cmdHistIdx + 1;
                  setCmdHistIdx(nextIdx);
                  setInput(cmdHistory[nextIdx] ?? '');
                } else {
                  setCmdHistIdx(cmdHistory.length);
                  setInput('');
                }
              }
            }}
          />
        </InputGroup>
      </Box>
    </Box>
  );
}
