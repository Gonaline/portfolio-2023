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
  .link {
    color: var(--white);
  }
  nav {
    display: flex;
    margin-right: 3vw;
  }
  .me {
    height: 15vh;
    width: 30vw;
    background-color: var(--darkColor);
    display: flex;
    justify-content: left;
    align-items: flex-end;
    h1 {
      margin: 0 2.5vw;
      width: 100%;
      text-align: left;
      padding-bottom: 1.5vh;
    }
  }

  li {
    text-decoration: none;
    color: var(--white);
    font-size: 1.6rem;
    font-weight: 300;
    text-align: center;
    height: 15vh;
    width: 15vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    .mainLink {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    ul {
      display: none;
    }
  }

  li:hover {
    background: var(--darkColor);
    ul {
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 15vw;
      background: var(--darkColor);
      position: absolute;
      top: 15vh;
      padding-bottom: 2vh;
      .link {
        width: 90%;
        height: 8vh;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        font-size: 1.4rem;
      }
      .link:hover {
        color: var(--mainColor);
        background: var(--white-opacity50);
      }
    }
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
