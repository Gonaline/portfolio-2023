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

  h4 {
    color: var(--white);
    opacity: 0.5;
    margin: 15vh 2.5vw 3vh 2.5vw;
  }
  h2 {
    color: var(--mainColor);
    margin: 0 2.5vw 5vh 2.5vw;
  }

  h5 {
    color: var(--white);
    margin: 0 2.5vw 0 2.5vw;
  }

  button {
    display: none;
  }
  @media screen and (max-width: 700px) {
    width: 100vw;
    position: static;
    margin-top: 15vh;
    h4 {
      margin-top: 10vh;
    }
    h2,
    h4,
    h5 {
      margin-left: 6vw;
      margin-right: 6vw;
    }

    button {
      margin: auto;
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
