import { AbsoluteCenter, Box } from '@chakra-ui/react';
import './App.css';
import { TerminalApp } from './components/terminal-app';

function App() {
  return (
    <Box position="relative" minHeight="100vh">
      <AbsoluteCenter axis="both">
        <TerminalApp />
      </AbsoluteCenter>
    </Box>
  );
}

export default App;
