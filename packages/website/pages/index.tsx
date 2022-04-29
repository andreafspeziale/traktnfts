import styled from '@emotion/styled';
import { useQuery } from 'react-query';
import { imageUrlBuilder, sanity } from '../utils/sanity';
import {
  Center,
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
import {
  FaDiscord,
  FaCheck,
  FaLink,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import { GiWhaleTail } from 'react-icons/gi';

const StyledPage = styled.div`
  .page {
  }
`;

const query = `
  *[ _type == 'project' ]
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.@emotion/styled file.
   */

  const { data: projects } = useQuery('getProjects', () => sanity.fetch(query));
  return (
    <StyledPage>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span>Hello fren, </span>
              <span className="claim">becoming a collector is not ez.</span>
              <span>
                You need to keep an eye on every project you like, organize and
                find them quickly.
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="container">
          <Flex gap={4} justifyContent="center" flexWrap="wrap">
            {projects?.map((project) => (
              <Center key={project._id} py={6}>
                <Box
                  w={'300px'}
                  bg={colorModeValue('white', 'gray.800')}
                  boxShadow={'2xl'}
                  rounded={'md'}
                  overflow={'hidden'}
                >
                  <Image
                    alt="hello"
                    h={'200px'}
                    w={'full'}
                    src={imageUrlBuilder.width(634).image(project.cover).url()}
                    objectFit={'cover'}
                  />
                  <Flex justify={'center'} mt={-12}>
                    <Avatar
                      size={'xl'}
                      src={imageUrlBuilder.width(634).image(project.icon).url()}
                      css={{
                        border: '2px solid white',
                      }}
                    />
                  </Flex>

                  <Box p={6}>
                    <Stack spacing={0} align={'center'} mb={5}>
                      <Heading
                        fontSize={'2xl'}
                        fontWeight={500}
                        fontFamily={'body'}
                      >
                        {project.name}
                      </Heading>
                    </Stack>
                    <Stack spacing={0} align={'center'} mt={5}>
                      <Text color={project.minted ? 'green.500' : 'red.500'}>
                        Minted <Icon as={FaCheck} />
                      </Text>
                    </Stack>
                    <Flex gap={4} mt={8} justifyContent="center">
                      {project.links.website && (
                        <Link href={project.links.website} isExternal>
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
                      {project.links.discord && (
                        <Link href={project.links.discord} isExternal>
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
                      {project.links.instagram && (
                        <Link href={project.links.instagram} isExternal>
                          <Icon
                            w={6}
                            h={6}
                            as={FaInstagram}
                            transition="all 0.2s"
                            _hover={{
                              color: 'blue.500',
                              transform: 'scale(1.1)',
                            }}
                          />
                        </Link>
                      )}
                      {project.links.twitter && (
                        <Link href={project.links.twitter} isExternal>
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
                      {project.links.opensea && (
                        <Link href={project.links.opensea} isExternal>
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
              </Center>
            ))}
          </Flex>
        </div>
      </div>
      <div className="wrapper">
        <div className="container">
          <p id="love">
            Carefully crafted with
            <svg
              fill="currentColor"
              stroke="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            by andrea.eth
          </p>
        </div>
      </div>
    </StyledPage>
  );
}

export default Index;
