import styled from 'styled-components';

export const FirstPartStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  .desktop {
    width: 70vw;
    height: 53vh;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 7vh 0 1vh 0;
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
  .arrow {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      height: 3vh;
      margin-bottom: 3vh;
      img {
        height: 100%;
      }
    }
  }

  @media screen and (max-width: 700px) {
    .desktop,
    .arrow {
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
