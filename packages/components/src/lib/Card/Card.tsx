import {
  Image,
  Box,
  Flex,
  Avatar,
  Heading,
  Text,
  Stack,
  Icon,
  Link,
  useColorModeValue as colorModeValue,
  Divider,
} from '@chakra-ui/react';
import {
  FaDiscord,
  FaRegCheckCircle,
  FaLink,
  FaTwitter,
  FaRegTimesCircle,
} from 'react-icons/fa';
import { GiWhaleTail } from 'react-icons/gi';
import { BsFillCalendarPlusFill } from 'react-icons/bs';
import moment from 'moment';

export interface CardProps {
  name: string;
  minted: boolean;
  cover: string;
  icon: string;
  website: string;
  discord: string;
  twitter: string;
  opensea: string;
  mint?: {
    private?: {
      start: string;
      end: string;
    };
    public?: {
      start: string;
      end: string;
    };
  };
}

export const Card: React.VFC<CardProps> = ({
  name,
  minted,
  cover,
  icon,
  website,
  discord,
  twitter,
  opensea,
  mint,
  ...props
}) => {
  return (
    <Box
      w={'340px'}
      bg={colorModeValue('white', 'gray.800')}
      boxShadow={'xl'}
      rounded={'md'}
      overflow={'hidden'}
      transition="all 0.2s ease-in-out"
      _hover={{
        boxShadow: '2xl',
        transform: 'scale(1.04)',
      }}
      {...props}
    >
      <Flex direction="column" height="100%">
        <Image
          alt="hello"
          h={'200px'}
          w={'full'}
          src={cover}
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={icon}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>
        <Flex p={3} direction="column" height="100%">
          <Stack spacing={0} align="center">
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              {name}{' '}
            </Heading>
          </Stack>
          {<Divider mt={4} mb={4} orientation="horizontal" />}
          <Flex justifyContent="space-around" gap={3} mb={4}>
            {!minted && mint && mint.private && (
              <Flex flex="1">
                {/* <Flex>
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
                </Flex> */}
                <Flex direction="column" alignItems="center" width="100%">
                  <Text
                    fontWeight={600}
                    mb={2}
                    fontSize="xs"
                    textTransform="uppercase"
                  >
                    Private Mint{' '}
                  </Text>
                  <Flex
                    direction="row"
                    alignItems="center"
                    width="100%"
                    justifyContent="space-around"
                  >
                    <Flex direction="column" alignItems="center" flex="1">
                      <Text
                        textTransform="uppercase"
                        fontWeight={700}
                        fontSize="md"
                        lineHeight="1em"
                      >
                        {moment(mint.private.start).format('DD MMM')}
                      </Text>
                      <Text fontSize="xs">
                        {moment(mint.private.start).format('HH:mm')}
                      </Text>
                    </Flex>
                    <Text>→</Text>
                    <Flex direction="column" alignItems="center" flex="1">
                      <Text
                        textTransform="uppercase"
                        fontWeight={700}
                        fontSize="md"
                        lineHeight="1em"
                      >
                        {moment(mint.private.end).format('DD MMM')}
                      </Text>
                      <Text fontSize="xs">
                        {moment(mint.private.end).format('HH:mm')}
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            )}
            {/* {!minted && mint && mint.private && (
              <Divider mt={4} mb={4} orientation="horizontal" />
            )} */}
            {!minted && mint && mint.public && (
              <Flex flex="1">
                {/* <Flex>
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
                </Flex> */}

                <Flex direction="column" alignItems="center" width="100%">
                  <Text
                    fontWeight={600}
                    mb={2}
                    fontSize="xs"
                    textTransform="uppercase"
                  >
                    Public Mint{' '}
                  </Text>
                  <Flex
                    direction="row"
                    alignItems="center"
                    width="100%"
                    justifyContent="space-between"
                  >
                    <Flex direction="column" alignItems="center" flex="1">
                      <Text
                        textTransform="uppercase"
                        fontWeight={700}
                        fontSize="md"
                        lineHeight="1em"
                      >
                        {moment(mint.public.start).format('DD MMM')}
                      </Text>
                      <Text fontSize="xs">
                        {moment(mint.public.start).format('HH:mm')}
                      </Text>
                    </Flex>
                    <Text>→</Text>
                    <Flex direction="column" alignItems="center" flex="1">
                      <Text
                        textTransform="uppercase"
                        fontWeight={700}
                        fontSize="md"
                        lineHeight="1em"
                      >
                        {moment(mint.public.end).format('DD MMM')}
                      </Text>
                      <Text fontSize="xs">
                        {moment(mint.public.end).format('HH:mm')}
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            )}
          </Flex>
          {<Divider mt="auto" mb={4} orientation="horizontal" />}

          <Flex gap={4} justifyContent="center">
            {website && (
              <Link href={website} isExternal>
                <Icon
                  w={5}
                  h={5}
                  as={FaLink}
                  transition="all 0.2s ease-in-out"
                  _hover={{
                    color: 'blue.500',
                    transform: 'scale(1.1)',
                  }}
                />
              </Link>
            )}
            {discord && (
              <Link href={discord} isExternal>
                <Icon
                  w={6}
                  h={6}
                  as={FaDiscord}
                  transition="all 0.2s"
                  _hover={{
                    color: 'blue.500',
                    transform: 'scale(1.1)',
                  }}
                />
              </Link>
            )}
            {twitter && (
              <Link href={twitter} isExternal>
                <Icon
                  w={6}
                  h={6}
                  as={FaTwitter}
                  transition="all 0.2s"
                  _hover={{
                    color: 'blue.500',
                    transform: 'scale(1.1)',
                  }}
                />
              </Link>
            )}
            {opensea && (
              <Link href={opensea} isExternal>
                <Icon
                  w={6}
                  h={6}
                  as={GiWhaleTail}
                  transition="all 0.2s"
                  _hover={{
                    color: 'blue.500',
                    transform: 'scale(1.1)',
                  }}
                />
              </Link>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Card;
