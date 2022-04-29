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
  Button,
  useColorModeValue as colorModeValue,
} from '@chakra-ui/react';

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
              <span> Hello there, </span>
              Welcome website 👋
            </h1>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="container">
          {projects?.map((project) => (
            <Center key={project._id} py={6}>
              <Box
                maxW={'270px'}
                w={'full'}
                bg={colorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}
              >
                <Image
                  alt="hello"
                  h={'200px'}
                  w={'full'}
                  src={imageUrlBuilder.width(634).image(project.image).url()}
                  objectFit={'cover'}
                />
                <Flex justify={'center'} mt={-12}>
                  <Avatar
                    size={'xl'}
                    src={imageUrlBuilder.width(634).image(project.image).url()}
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
                    <Text color={'gray.500'}>descrizione</Text>
                  </Stack>

                  <Stack direction={'row'} justify={'center'} spacing={6}>
                    <Stack spacing={0} align={'center'}>
                      <Text fontWeight={600}>23k</Text>
                      <Text fontSize={'sm'} color={'gray.500'}>
                        Followers
                      </Text>
                    </Stack>
                    <Stack spacing={0} align={'center'}>
                      <Text fontWeight={600}>23k</Text>
                      <Text fontSize={'sm'} color={'gray.500'}>
                        Followers
                      </Text>
                    </Stack>
                  </Stack>

                  <Button
                    w={'full'}
                    mt={8}
                    bg={colorModeValue('#151f21', 'gray.900')}
                    color={'white'}
                    rounded={'md'}
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: 'lg',
                    }}
                  >
                    Follow
                  </Button>
                </Box>
              </Box>
            </Center>
          ))}
        </div>
      </div>
    </StyledPage>
  );
}

export default Index;
