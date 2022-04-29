import styled from '@emotion/styled';
import { useQuery } from 'react-query';
import { sanity, imageUrlBuilder } from '../utils/sanity';

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
        <div className="container">{JSON.stringify(projects)}</div>
      </div>
    </StyledPage>
  );
}

export default Index;
