import styled from '@emotion/styled';
import { useQuery } from 'react-query';
import { imageUrlBuilder, sanity } from '../utils/sanity';
import { Center, Flex } from '@chakra-ui/react';
import { Card } from '@traktnfts/components';

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
          <Flex gap={6} justifyContent="center" flexWrap="wrap">
            {projects?.map((project) => (
              <Center key={project._id} py={6}>
                {project.displayed && (
                  <Card
                    name={project.name}
                    minted={project.minted}
                    website={project.links.website}
                    discord={project.links.discord}
                    twitter={project.links.twitter}
                    opensea={project.links.opensea}
                    cover={imageUrlBuilder
                      .width(634)
                      .image(project.cover)
                      .url()}
                    icon={imageUrlBuilder.width(150).image(project.icon).url()}
                    mint={project.mint}
                  />
                )}
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
