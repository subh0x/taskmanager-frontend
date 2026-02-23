import { Box, Code, Flex, HStack, Separator, Text } from '@chakra-ui/react';

const MAIN_COMMAND_LIST = [
  { cmd: 'add <task>', desc: 'Add Task' },
  { cmd: 'done <id>', desc: 'Mark Done' },
  { cmd: 'del <id>', desc: 'Delete Task' },
  { cmd: 'list', desc: 'List Tasks' },
  { cmd: 'help', desc: 'Get Help' },
];

export function QuickAccessToolBar() {
  return (
    <Flex fontSize={'sm'} p={2} justifyContent={'space-between'} alignItems={'center'}>
      <HStack gap="2" align="flex-start">
        {MAIN_COMMAND_LIST.map(({ cmd, desc }, idx) => (
          <>
            <Box key={cmd} textAlign="center">
              <Code variant={'outline'} px={2}>
                {cmd}
              </Code>
              <Text fontSize="xs" color="var(--muted)" mt={1}>
                {desc}
              </Text>
            </Box>
            {/* Don't render separator for last item */}
            {(idx !==  MAIN_COMMAND_LIST.length-1) && <Separator orientation={'vertical'} height={10} />} 
          </>
        ))}
      </HStack>
      <Box textAlign="center">
        <div>
          <Flex direction={'row'} alignItems={'center'} justifyContent={'center'} gap={2}>
            <Code variant={'outline'}>↑</Code>
            <Code variant={'outline'}>↓</Code>
          </Flex>
        </div>
        <Text fontSize="xs" color="var(--muted)" mt={1}>
          Cmd History
        </Text>
      </Box>
    </Flex>
  );
}
