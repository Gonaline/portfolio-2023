import styled from 'styled-components';

export const NavbarStyle = styled.nav`
  display: flex;
  margin-right: 3vw;
  .logo {
    display: none;
  }
  .link {
    color: var(--white);
  }
  li {
    text-decoration: none;
    color: var(--white);
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
        color: var(--titleColor);
        background: var(--white-opacity50);
      }
    }
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
