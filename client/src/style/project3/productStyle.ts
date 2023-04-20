import styled from 'styled-components';

export const PageProductStyle = styled.section`
  width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 700px) {
    width: 100vw;
  }
`;

export const FirstPartStyle = styled.section`
  .desktop {
    width: 70vw;
    height: 53vh;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 7vh 0;
    .right {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
  .mobile {
    display: none;
  }

  @media screen and (max-width: 700px) {
    .desktop {
      display: none;
    }
    .mobile {
      width: 100vw;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 3vh;
    }
  }
`;

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

  @media screen and (max-width: 700px) {
  }
`;
