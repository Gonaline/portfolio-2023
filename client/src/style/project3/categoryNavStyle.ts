import styled from 'styled-components';

export const ButtonStyle = styled.button`
  height: 8vh;
  width: 15vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--backgroundColor);
  border: none;

  :hover {
    background: var(--opacityColor);
  }

  @media screen and (max-width: 700px) {
    width: 100vw;
  }
`;

export const CategoryStyle = styled.div`
  height: 6vh;
  width: 12vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  img {
    height: 5vh;
    aspect-ratio: 1/1;
    margin: 0 0.5vw;
  }
  :hover {
    background: var(--white-opacity80);
    border-radius: 10px;
  }
  @media screen and (max-width: 700px) {
    min-height: 4vh;
    width: 100vw;
    background-color: none;
    img {
      height: 3vh;
      margin: 0 5vw;
      border-bottom: 1vw;
    }
    :hover {
      border-radius: none;
    }
  }
`;
export const SubmenuStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  min-height: 25vh;
  background-color: var(--backgroundColor);
  box-shadow: var(--box-shadow);

  @media screen and (max-width: 700px) {
    flex-direction: column;
    a {
      border-top: var(--mainColor) 2px solid;
    }
  }
`;

export const CategoryNavStyle = styled.section`
  width: 70vw;
  background: var(--opacityColor);
  box-shadow: var(--box-shadow);
  display: flex;
  flex-wrap: nowrap;
  justify-content: left;
  align-items: center;
  a {
    text-decoration: none;
    color: var(--darkColor);
  }
  .isOpen {
    box-shadow: none;
  }

  @media screen and (max-width: 700px) {
    min-height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: flex-start;

    .title {
      width: 100vw;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
`;
