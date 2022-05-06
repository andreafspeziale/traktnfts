import { Flex, Text, Icon } from '@chakra-ui/react';
import { IoIosInfinite } from 'react-icons/io';
import { Date } from '../Date';

export type MintProps = {
  title: string;
  start: string;
  end: string;
};

export const Mint: React.VFC<MintProps> = ({ title, start, end }) => {
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
    </Flex>
  );
};

/* <Flex>
                  <Link
                    href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${name}+Private+Mint&dates=${moment(
                      mint.private.start
                    ).format('YYYYMMDD[T]HH:mm')}/${moment(
                      mint.private.end
                    ).format('YYYYMMDD[T]HH:mm')}`}
                    isExternal
                  >
                    <Icon
                      w={5}
                      h={5}
                      as={BsFillCalendarPlusFill}
                      transition="all 0.2s ease-in-out"
                      _hover={{
                        color: 'blue.500',
                        transform: 'scale(1.1)',
                      }}
                    />
                  </Link>
                </Flex> */
