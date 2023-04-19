import styled from 'styled-components';

export default styled.section`
  background-color: var(--darkColor);
  width: 30vw;
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 15vh;
  h2,
  h4,
  h5 {
    margin-left: 2.5vw;
    margin-right: 2.5vw;
  }
  h2,
  h5 {
    margin-bottom: 6vh;
  }
  .subTitle {
    margin-bottom: 2vh;
    opacity: 0.5;
  }
  h4,
  h5 {
    color: var(--white);
  }
  h2 {
    color: var(--mainColor);
  }
  button {
    display: none;
  }
  @media screen and (max-width: 700px) {
    width: 100vw;
    position: absolute;
    h4 {
      margin-top: 4vh;
    }
    h2,
    h4,
    h5 {
      margin-left: 6vw;
      margin-right: 6vw;
    }
    button {
      margin: auto;
      margin-top: 15vh;
      width: 15vw;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
      }
    }
  }
`;
