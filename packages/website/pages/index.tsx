import React from 'react';
import styled from '@emotion/styled';
import { useQuery } from 'react-query';
import { imageUrlBuilder, sanity } from '../utils/sanity';
import {
  Center,
  Checkbox,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { Card } from '@traktnfts/components';
import { useDebounce } from 'use-debounce';
import { SearchIcon } from '@chakra-ui/icons';

const StyledPage = styled.div`
  .page {
  }
`;

const query = (search: string, minted: boolean, notMinted: boolean): string => `
  *[ _type == 'project' && name match "*${search}*" ${
  minted ? '&& minted' : ''
} ${
  notMinted ? '&& !minted' : ''
}] |  order(mint.public.start, mint.private.start, minted)
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.@emotion/styled file.
   */

  const [search, setSearch] = React.useState('');
  const [minted, setMinted] = React.useState(false);
  const [notMinted, setNotMinted] = React.useState(false);

  const deferredSearch = React.useDeferredValue(search);

  const [debouncedSearch] = useDebounce(deferredSearch, 1000);

  const { data: projects } = useQuery(
    ['getProjects', debouncedSearch, minted, notMinted],
    () => sanity.fetch(query(debouncedSearch, minted, notMinted)),
    {
      keepPreviousData: true,
    }
  );

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
          <Flex alignItems="center" gap={4} direction="column">
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                // eslint-disable-next-line react/no-children-prop
                children={<SearchIcon color="gray.300" />}
              />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search...  "
              />
            </InputGroup>
            <Flex flexShrink={0} gap={4}>
              <Checkbox
                isChecked={minted}
                onChange={(e) => {
                  setMinted(e.target.checked);
                  setNotMinted(false);
                }}
              >
                Minted
              </Checkbox>
              <Checkbox
                isChecked={notMinted}
                onChange={(e) => {
                  setNotMinted(e.target.checked);
                  setMinted(false);
                }}
              >
                Not minted
              </Checkbox>
            </Flex>
          </Flex>
          <Flex gap={6} justifyContent="center" flexWrap="wrap">
            {projects?.map((project) => (
              <Center key={project._id} py={6} alignItems="stretch">
                <Card
                  name={project.name}
                  minted={project.minted}
                  website={project.links.website}
                  discord={project.links.discord}
                  twitter={project.links.twitter}
                  opensea={project.links.opensea}
                  cover={imageUrlBuilder
                    .width(634)
                    .height(400)
                    .image(project.cover)
                    .url()}
                  icon={imageUrlBuilder.width(150).image(project.icon).url()}
                  mint={project.mint}
                />
              </Center>
            ))}
          </Flex>
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
