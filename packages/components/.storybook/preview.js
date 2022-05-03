import { addDecorator } from '@storybook/react';

import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import theme from '@chakra-ui/theme';

addDecorator((storyFn) => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    {storyFn()}
  </ChakraProvider>
));
