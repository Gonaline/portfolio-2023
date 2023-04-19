import styled from 'styled-components';

export default styled.section`
  width: 70vw;
  height: 75vh;
  background-color: var(--backgroundColor);
  position: fixed;
  top: 15vh;
  left: 30vw;
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
    width: 100vw;
    min-height: 77vh;
    padding-bottom: 9vh;
  }
`;
