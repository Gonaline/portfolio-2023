import styled from 'styled-components';

export const PersonalizationStyle = styled.section`
  width: 32vw;
  min-height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  h5 {
    font-size: 1rem;
    line-height: 1.3rem;
  }
  .custom {
    color: var(--buttonOnHoverColor);
    margin-bottom: 0.5vh;
  }

  @media screen and (max-width: 700px) {
    width: 90vw;
    padding: 2vh 0 12vh 0;
    h5 {
      font-size: 1.3rem;
    }
    .custom {
      margin-bottom: 1vh;
    }
  }
`;
