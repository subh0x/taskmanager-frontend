import { useTerminalStore } from '@/stores/terminal-store';
import { Box, InputGroup, Text, Input } from '@chakra-ui/react';

export function TerminalInput() {
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

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>){
    switch(e.key) {
      case 'Enter':
        handleEnterKey(e);
        break;
      
      case 'ArrowUp':
        e.preventDefault();
        handleUpArrowKey();
        break;
      
      case 'ArrowDown':
        e.preventDefault();
        handleDownArrowKey();
        break;
    }
  }

  function handleEnterKey(e: React.KeyboardEvent<HTMLInputElement>) {
    const terminalInputStr = e.currentTarget.value.trim();
    // Send the currentTarget Value for processing the commands and displaying in the output.
    if (terminalInputStr != '') {
      updateOutput(terminalInputStr);
      updateCmdHistory(terminalInputStr);
      // Set Index to track the from last command.
      updateCmdHistIdx(cmdHistory.length);
      clearInput();
    }
  }


//  Navigate through CLI History
  function handleUpArrowKey() {
    // Allow for the Arrow up commands only till the idx val = 0
    if (cmdHistIdx > 0 && cmdHistIdx <= cmdHistory.length) {
      decCmdHistIdx();
      updateInput(cmdHistory[cmdHistIdx] ?? '');
    }
  }

  function handleDownArrowKey() {
    if (cmdHistIdx < cmdHistory.length - 1) {
      const nextIdx = cmdHistIdx + 1;
      incCmdHistIdx();
      updateInput(cmdHistory[nextIdx] ?? '');
    } else {
      updateCmdHistIdx(cmdHistory.length);
      updateInput('');
    }
  } 

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
            onKeyDown={handleKeyDown}
          />
        </InputGroup>
      </Box>
    </Box>
  );
}
