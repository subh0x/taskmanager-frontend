import { useTerminalStore } from '@/stores/terminal-store';
import { Box, Text } from '@chakra-ui/react';

export function TerminalOutput() {
  const { output } = useTerminalStore();

  return (
    <Box fontSize={'sm'} color={'var(--dim)'} p={2}>
      <Text>Welcome to taskmanager-cli! Type 'help' to get started.</Text>
      <Text>{output}</Text>
    </Box>
  );
}
