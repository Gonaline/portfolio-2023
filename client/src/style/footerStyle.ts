import styled from 'styled-components';

export default styled.footer`
  height: 10vh;
  width: 100vw;
  background-color: var(--mainColor);
  display: flex;
  position: fixed;
  bottom: 0;
  .left {
    height: 10vh;
    width: 30vw;
    background-color: var(--darkColor);
  }
  .links {
    display: flex;
    align-items: center;
    margin-left: 1vw;
  }

  a {
    margin-left: 1vw;
    align-items: center;
    img {
      height: 6vh;
      aspect-ratio: 1/1;
      background-size: contain;
    }
  }
  .cv {
    background-color: var(--darkColor);
    height: 6vh;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    p {
      color: var(--mainColor);
      font-size: 1.3rem;
    }
  }

  @media screen and (max-width: 700px) {
    a {
      margin-left: 4vw;
    }
    a:first-child {
      margin-left: 6vw;
    }
    .left {
      display: none;
    }
  }
`;
