import styled from 'styled-components';

export const FirstPartStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  min-height: 65vh;

  .desktop {
    width: 70vw;
    min-height: 53vh;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    .right {
      min-height: 53vh;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
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
      margin: 3vh 0 1vh 0;
      img {
        height: 100%;
      }
    }
  }

  @media screen and (max-width: 700px) {
    justify-content: flex-start;
    align-items: flex-start;
    min-height: 65vh;

    .desktop,
    .arrow {
      display: none;
    }
    .mobile {
      width: 100vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 3vh;
    }
  }
`;
