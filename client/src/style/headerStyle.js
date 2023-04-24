import styled from 'styled-components';

export default styled.header`
  position: fixed;
  z-index: 1;
  width: 100vw;
  height: 15vh;
  background-color: var(--mainColor);
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  .me {
    height: 15vh;
    width: 30vw;
    background-color: var(--darkColor);
    display: flex;
    align-items: center;
    .logo {
      margin: 0 1vw 0 1.5vw;
      height: 60%;
      aspect-ratio: 1/1;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        border-radius: 50%;
        aspect-ratio: 1/1;
        object-fit: contain;
        background: var(--mainColor);
      }
    }
    .title {
      display: flex;
      justify-content: left;
      align-items: center;

      h1 {
        color: var(--white);
        text-align: left;
      }
    }
  }

  @media screen and (max-width: 700px) {
    background-color: var(--darkColor);
    .me {
      width: 82vw;

      .logo {
        margin: 0 3vw 0 6vw;
      }
      .title {
        display: none;
      }
    }
  }
`;
