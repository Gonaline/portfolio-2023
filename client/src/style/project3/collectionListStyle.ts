import styled from 'styled-components';

export const CollectionListStyle = styled.div`
  em {
    color: var(--buttonOnHoverColor);
    margin-right: 0.1rem;
  }
  a {
    em {
      padding: 0.2rem 0.4rem;
      font-weight: bold;
      :hover {
        background-color: var(--buttonOnHoverColor);

        color: var(--white);
      }
    }
  }
  padding-bottom: 1.5vh;
`;
