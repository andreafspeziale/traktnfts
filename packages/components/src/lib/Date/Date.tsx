import { Flex, Text } from '@chakra-ui/react';
import moment from 'moment';

export type DateProps = {
  date: string;
};
export const Date: React.VFC<DateProps> = ({ date }) => {
  const momentDate = moment(date);
  return (
    <Flex direction="column" alignItems="center" flex="1">
      <Text
        textTransform="uppercase"
        fontWeight={700}
        fontSize="md"
        lineHeight="1em"
      >
        {momentDate.format('DD MMM')}
      </Text>
      <Text fontSize="xs">{momentDate.format('HH:mm')}</Text>
    </Flex>
  );
};
