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
      h4 {
        padding: 4vh 0 6vh 2vw;
        color: var(--buttonOnHoverColor);
        em {
        }
      }
    }

    background-color: var(--white-opacity50);
  }
  @media screen and (max-width: 700px) {
    width: 100vw;

    .secondPart {
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        h4 {
          width: 90vw;
          text-align: center;
          padding: 4vh 0 5vh 0;
          font-size: 1.2rem;
        }
      }

      background-color: var(--white-opacity50);
    }
  }
`;
