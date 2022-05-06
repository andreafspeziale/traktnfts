import {
  Image,
  Box,
  Flex,
  Avatar,
  Heading,
  Stack,
  Icon,
  Link,
  useColorModeValue as colorModeValue,
} from '@chakra-ui/react';
import { FaDiscord, FaLink, FaTwitter } from 'react-icons/fa';
import { GiWhaleTail } from 'react-icons/gi';
import { MintSection } from '../MintSection';
import { IconLink } from '../IconLink';

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
        <Flex px={3} py={6} direction="column" height="100%">
          <Heading
            textAlign="center"
            fontSize={'2xl'}
            fontWeight={500}
            fontFamily={'body'}
          >
            {name}
          </Heading>
          <MintSection _public={mint?.public} _private={mint?.private} />
          <Flex gap={4} justifyContent="center" mt="auto">
            {website && <IconLink href={website} icon={FaLink} />}
            {twitter && <IconLink href={discord} icon={FaDiscord} />}
            {twitter && <IconLink href={twitter} icon={FaTwitter} />}
            {opensea && <IconLink href={opensea} icon={GiWhaleTail} />}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Card;
