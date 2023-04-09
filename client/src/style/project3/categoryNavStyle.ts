import styled from 'styled-components';

export const CollectionButtonStyle = styled.button`
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

export const ChoiceButtonStyle = styled.button`
  height: 6vh;
  width: 12vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: var(--white-opacity80);
  border: none;
  border-radius: 10px;

  img {
    height: 5vh;
    aspect-ratio: 1/1;
    margin: 0 0.5vw;
  }
  p {
    text-align: left;
  }
  :hover {
    background: var(--mainColor);
  }
  @media screen and (max-width: 700px) {
    min-height: 4vh;
    width: 100vw;
    background-color: none;
    border-top: var(--mainColor) 2px solid;

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
