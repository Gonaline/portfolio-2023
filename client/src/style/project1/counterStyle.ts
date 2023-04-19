import styled from 'styled-components';

export default styled.div`
  height: 10vh;
  width: 55vw;
  display: flex;
  align-items: center;
  justify-content: center;
  .verticalLine {
    width: 0.15vw;
    height: 3vh;
    background-color: var(--darkColor);
  }
  .you,
  .computer {
    min-width: 20vw;
    max-width: 20vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .you {
    justify-content: right;
    padding-right: 1vw;
  }
  .computer {
    justify-content: left;
    padding-left: 1vw;
    img {
      width: 3vw;
      padding-left: 1vw;
    }
  }
  .points {
    min-width: 4vw;
    aspect-ratio: 2/1;
    border-radius: calc(var(--border-radius) / 2);
    background-color: var(--mainColor);
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    p {
      color: var(--white);
    }
  }
  h4 {
    margin: 0px 10px 0 10px;
    font-size: 2em;
  }
  @media screen and (max-width: 700px) {
    height: 6vh;
    width: 100vw;
    background-color: var(--white-opacity50);
    margin: 2vh 0;

    .verticalLine {
      margin: 0 4vw;
    }
    .you {
      padding-right: 1vw;
      h4 {
        margin-right: 2vw;
        font-size: 1.2rem;
      }
    }
    .computer {
      padding-left: 1vw;
      img {
        width: 7vw;
        padding-left: 3vw;
      }
    }
    .points {
      min-width: 16vw;
      aspect-ratio: 2.5/1;
      border-radius: var(--border-radius);
    }
  }
`;
