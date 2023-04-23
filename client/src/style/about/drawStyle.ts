import styled from 'styled-components';

export const DrawStyle = styled.section`
  width: 70vw;
  height: 85vh;
  position: absolute;
  top: 15vh;
  left: 30vw;
  display: flex;
  justify-content: center;
  align-items: center;
  .welcome {
    width: 70vw;
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      color: var(--titleColor);
      margin-bottom: 5vh;
      font-size: 4rem;
    }
  }
  .scraping {
    width: 70vw;
    height: 85vh;
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    justify-content: stretch;
    align-items: stretch;
    .case {
      display: flex;
      justify-content: center;
      align-items: center;
      width: calc(70vw / 40);
    }
    .yes {
      background-color: var(--mainColor);
    }
  }

  @media screen and (max-width: 700px) {
    position: static;
    width: 100vw;
    height: 75vh;
  }
`;
