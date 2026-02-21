import './App.css';

function App() {
  return (
    <>
      <Demo />
    </>
  );
}

export default App;

import { CheckboxCard } from '@chakra-ui/react';

const Demo = () => {
  return (
    <>
      <CheckboxCard.Root maxW="240px">
        <CheckboxCard.HiddenInput />
        <CheckboxCard.Control>
          <CheckboxCard.Content>
            <CheckboxCard.Label>Next.js</CheckboxCard.Label>
            <CheckboxCard.Description>Best for apps</CheckboxCard.Description>
          </CheckboxCard.Content>
          <CheckboxCard.Indicator />
        </CheckboxCard.Control>
      </CheckboxCard.Root>
    </>
  );
};
