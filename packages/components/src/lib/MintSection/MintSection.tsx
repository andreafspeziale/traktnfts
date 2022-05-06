import { Divider, Flex } from '@chakra-ui/react';
import { Mint } from '../Mint';

type Mint = {
  start: string;
  end: string;
};

export type MintSectionProps = {
  name: string;
  _public?: Mint;
  _private?: Mint;
};

export const MintSection: React.VFC<MintSectionProps> = ({
  name,
  _private,
  _public,
}) => {
  return (
    <>
      {(_private || _public) && (
        <Divider mt={4} mb={4} orientation="horizontal" />
      )}
      <Flex
        justifyContent="space-around"
        gap={3}
        minHeight="60px"
        alignItems="center"
      >
        {_private && (
          <Mint
            name={name}
            title="Private Mint"
            start={_private.start}
            end={_private.end}
          />
        )}
        {_private && _public && (
          <Divider ml={1} mr={1} orientation="vertical" />
        )}

        {_public && (
          <Mint
            name={name}
            title="Public Mint"
            start={_public.start}
            end={_public.end}
          />
        )}
      </Flex>
      {(_private || _public) && (
        <Divider mt={4} mb={4} orientation="horizontal" />
      )}
    </>
  );
};

/* <Flex>
                  <Link
                    href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${name}+Private+Mint&dates=${moment(
                      private.start
                    ).format('YYYYMMDD[T]HH:mm')}/${moment(
                      private.end
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
