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
      w={'300px'}
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
      <Box p={6}>
        <Stack spacing={0} align="center">
          <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
            {name}{' '}
            <Icon
              h={5}
              color={minted ? 'green.500' : 'red.500'}
              as={minted ? FaRegCheckCircle : FaRegTimesCircle}
            />
          </Heading>
        </Stack>
        <Divider mt={4} mb={4} orientation="horizontal" />
        {!minted && mint && mint.private && (
          <Stack spacing={0} direction="row">
            <Stack spacing={0} m="auto">
              <Link
                href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${name}+Private+Mint&dates=${moment(
                  mint.private.start
                ).format('YYYYMMDD[T]HH:mm')}/${moment(mint.private.end).format(
                  'YYYYMMDD[T]HH:mm'
                )}`}
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
            </Stack>
            <Stack spacing={0}>
              <Text fontWeight={600}>Private Mint </Text>
              <Text fontSize="sm">
                {moment(mint.private.start).format('DD-MM-YYYY HH:mm')}
              </Text>
              <Text fontSize="sm">
                {moment(mint.private.end).format('DD-MM-YYYY HH:mm')}
              </Text>
            </Stack>
          </Stack>
        )}
        {!minted && mint && mint.private && (
          <Divider mt={4} mb={4} orientation="horizontal" />
        )}
        {!minted && mint && mint.public && (
          <Stack spacing={0} direction="row">
            <Stack spacing={0} m="auto">
              <Link
                href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${name}+Public+Mint&dates=${moment(
                  mint.public.start
                ).format()}`}
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
            </Stack>
            <Stack spacing={0}>
              <Text fontWeight={600}>Public Mint</Text>
              <Text fontSize="sm">
                {moment(mint.public.start).format('YYYY-MM-DD HH:mm')}
              </Text>
            </Stack>
          </Stack>
        )}
        {!minted && mint && mint.public && (
          <Divider mt={4} mb={4} orientation="horizontal" />
        )}
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
      </Box>
    </Box>
  );
};

export default Card;
