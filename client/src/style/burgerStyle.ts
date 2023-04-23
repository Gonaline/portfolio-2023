import styled from 'styled-components';

export const BurgerStyle = styled.div`
  display: none;

  @media screen and (max-width: 700px) {
    display: flex;
    .hamburger {
      border: none;
      width: 12vw;
      aspect-ratio: 1/0.8;
      position: absolute;
      right: 6vw;
      top: 3vh;
      .burger {
        width: 100%;
        height: 0.5vh;
        border-radius: 0.25vh;
        background-color: var(--white);
      }
    }
    .false {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .true {
      .burger {
        background-color: var(--mainColor);
      }
      .burger1 {
        transform: rotate(40deg);
      }
      .burger2 {
        display: none;
      }
      .burger3 {
        transform: rotate(-40deg);
      }
    }

    li {
      width: 100vw;
      position: fixed;
      top: 15vh;
      left: 0;
      background-color: var(--darkColor);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      a {
        width: 100vw;
        height: 7.5vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-right: 10vw;
        background-color: var(--white-opacity20);
        border-bottom: 0.6vh solid var(--darkColor);
        p {
          color: var(--backgroundColor);
          text-align: right;
        }
        :hover {
          color: var(--mainColor);
        }
      }
    }
  }
`;
