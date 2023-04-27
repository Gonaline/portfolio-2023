import styled from 'styled-components';

export default styled.section`
  background-color: var(--darkColor);
  width: 30vw;
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: fixed;
  top: 15vh;
  .subTitle,
  .title,
  .description {
    padding: 0 1.5vw 0 2.5vw;
  }
  .title {
    padding-right: 3vw;
    margin: 1vh 0 1vh 0;
  }
  .subTitle {
    display: flex;
    min-height: 10vh;
    max-height: 13vh;
    align-items: flex-end;
    h4 {
      color: var(--white);
      opacity: 0.5;
    }
  }
  .title {
    display: flex;
    min-height: 20vh;
    align-items: center;
    h2 {
      color: var(--titleColor);
    }
  }
  .description {
    height: 42vh;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    h5 {
      color: var(--white);
    }
  }

  button {
    display: none;
  }
  @media screen and (max-width: 700px) {
    width: 100vw;
    position: static;
    margin-top: 15vh;
    .subTitle {
      display: flex;
      min-height: 8vh;
      max-height: 8vh;
    }
    h2,
    h4,
    h5 {
      padding: 0 1.5vw 0 5vw;
    }
    h2 {
      padding-right: 8vw;
    }
    .description {
      height: 35vh;
      h5 {
        font-size: 1rem;
      }
    }
    button {
      display: flex;
      margin: auto;
      height: 4vh;
      margin-bottom: 3vh;
      img {
        height: 100%;
      }
    }
  }
`;
