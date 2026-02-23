import { Flex, Grid, GridItem } from '@chakra-ui/react';
import { TitleBar } from './title-bar';
import { SideBar } from './side-bar';
import { Terminal } from './terminal';
import { QuickAccessToolBar } from './quick-access-toolbar';

export function TerminalApp() {
  return (
    <Flex
      borderWidth="1px"
      margin={'auto'}
      mt={'12'}
      width="100%"
      maxW="1080px"
      minH="80vh"
      borderRadius={'md'}
      bg={'var(--bg)'}
      flexDirection="column"
      overflow="hidden"
    >
      <Grid gap={0} flex={1} templateRows="auto 1fr auto" templateColumns="2fr 6fr">
        <GridItem colSpan={2} borderBottomWidth="1px" bg={'var(--surface2)'}>
          <TitleBar />
        </GridItem>
        <GridItem rowSpan={2} borderRightWidth="1px" bg={'var(--surface)'}>
          <SideBar />
        </GridItem>
        <GridItem borderBottomWidth="1px" bg={'var(--bg)'}>
          <Terminal />
        </GridItem>
        <GridItem bg={'var(--bg)'}>
          <QuickAccessToolBar />
        </GridItem>
      </Grid>
    </Flex>
  );
}
