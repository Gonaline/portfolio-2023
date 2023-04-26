import styled from 'styled-components';

export const Project1Style = styled.section`
  width: 70vw;
  min-height: 85vh;
  position: absolute;
  top: 15vh;
  left: 30vw;
  background-color: var(--backgroundColor);

  .title {
    display: flex;
    justify-content: left;
    align-items: center;
    height: 12vh;
    width: 100%;
    h2 {
      font-weight: bold;
      padding-left: 2vw;
    }
  }
  .empty {
    height: 10vh;
  }

  .bottom {
    width: 95%;
    height: 8vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .countdown {
      margin-right: 1vw;
    }
  }

  @media screen and (max-width: 700px) {
    position: static;
    width: 100vw;
    height: 75vh;
    .title {
      justify-content: flex-start;
      margin: auto;
      width: 100%;
      h2 {
        text-align: center;
        padding-left: 0;
        padding-top: 2vh;
      }
    }

    .bottom {
      width: 100%;
      height: 8vh;
      justify-content: center;
      .countdown {
        margin-right: 1vw;
      }
    }
  }
`;
