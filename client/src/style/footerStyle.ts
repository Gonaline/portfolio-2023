import styled from 'styled-components';

export default styled.footer`
  height: 10vh;
  width: 100vw;
  background-color: var(--headerAndFooterColor);
  display: flex;
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

  @media screen and (max-width: 700px) {
    position: fixed;
    height: 9vh;
    width: 100%;
    bottom: 0;
    left: 0;
    a {
      margin-left: 4vw;
    }
    .left {
      display: none;
    }
  }
`;
