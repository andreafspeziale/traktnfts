import { Flex, Text, Icon } from '@chakra-ui/react';
import { IoIosInfinite } from 'react-icons/io';
import { Date } from '../Date';
import { IconLink } from '../IconLink';
import moment from 'moment';
import { BsCalendarPlus } from 'react-icons/bs';

export type MintProps = {
  name: string;
  title: string;
  start: string;
  end: string;
};

export const Mint: React.VFC<MintProps> = ({ name, title, start, end }) => {
  return (
    <Flex direction="column" alignItems="center" width="100%" flex="1">
      <Text fontWeight={600} mb={2} fontSize="xs" textTransform="uppercase">
        {title}
      </Text>
      <Flex
        direction="row"
        alignItems="center"
        width="100%"
        justifyContent="space-between"
      >
        <Date date={start} />
        <Text>→</Text>
        {end ? (
          <Date date={end} />
        ) : (
          <Flex direction="column" alignItems="center" flex="1">
            <Text
              textTransform="uppercase"
              fontWeight={700}
              fontSize="md"
              lineHeight="1em"
            >
              <Icon w={8} h={8} as={IoIosInfinite} />
            </Text>
          </Flex>
        )}
      </Flex>
      <IconLink
        href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${name}+${title}&dates=${moment(
          start
        ).format('YYYYMMDD[T]HH:mm')}/${moment(end).format(
          'YYYYMMDD[T]HH:mm'
        )}`}
        icon={BsCalendarPlus}
      />
    </Flex>
  );
};
