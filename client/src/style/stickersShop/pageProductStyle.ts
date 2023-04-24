import styled from 'styled-components';

export const PageProductStyle = styled.section`
  width: 70vw;
  min-height: 75vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .secondPart {
    div {
      display: flex;
      h5 {
        padding: 4vh 0 6vh 2vw;
        em {
          font-size: 1.2rem;
          color: var(--buttonOnHoverColor);
        }
        .mobile {
          display: none;
        }
      }
    }
    background-color: var(--white-opacity50);
  }

  @media screen and (max-width: 700px) {
    width: 100vw;

    .secondPart {
      div {
        justify-content: center;
        align-items: center;
        h5 {
          width: 90vw;
          text-align: center;
          padding: 4vh 0 5vh 0;
          font-size: 1rem;
          em {
            font-size: 1.2rem;
          }
          .mobile {
            display: flex;
          }
        }
      }
    }
  }
`;
