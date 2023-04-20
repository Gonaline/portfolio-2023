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
  .mobile {
    display: none;
  }
  .desktop {
    height: 15vh;
    width: 30vw;
    background-color: var(--darkColor);
    display: flex;
    justify-content: left;
    align-items: flex-end;
    h1 {
      color: var(--white);
      margin: 0 2.5vw;
      width: 100%;
      text-align: left;
      padding-bottom: 1.5vh;
    }
  }

  @media screen and (max-width: 700px) {
    background-color: var(--darkColor);
    .desktop {
      display: none;
    }
    .mobile {
      width: 20vw;
      height: 100%;
      aspect-ratio: 1/1;
      padding-left: 6vw;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 20vw;
        aspect-ratio: 1/1;
        object-fit: contain;
        background: var(--mainColor);
        border-radius: 10vw;
        margin: 2vh 0;
      }
    }
  }
`;
