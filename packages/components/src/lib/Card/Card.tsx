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
} from '@chakra-ui/react';
import { FaDiscord, FaCheck, FaLink, FaTwitter } from 'react-icons/fa';
import { GiWhaleTail } from 'react-icons/gi';

export interface CardProps {
  name: string;
  minted: boolean;
  cover: string;
  icon: string;
  website: string;
  discord: string;
  twitter: string;
  opensea: string;
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
        <Stack spacing={0} align={'center'} mb={5}>
          <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
            {name}
          </Heading>
        </Stack>
        <Stack spacing={0} align={'center'} mt={5}>
          <Text color={minted ? 'green.500' : 'red.500'}>
            Minted <Icon as={FaCheck} />
          </Text>
        </Stack>
        <Flex gap={4} mt={8} justifyContent="center">
          {website && (
            <Link href={website} isExternal>
              <Icon
                w={6}
                h={6}
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
