import styled from 'styled-components';

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
