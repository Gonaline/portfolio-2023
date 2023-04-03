import styled from 'styled-components';

export default styled.div`
  height: 10vh;
  width: 55vw;
  display: flex;
  align-items: center;
  justify-content: center;
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
  }
  .points {
    width: 5vw;
    aspect-ratio: 2/1;
    border-radius: var(--border-radius);
    background-color: var(--otherColor);
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
  h4 {
    margin: 0px 10px 0 10px;
    font-size: 2em;
  }
  @media screen and (max-width: 700px) {
    height: 8vh;
    width: 100vw;
    .you,
    .computer {
      width: 50%;
      flex-direction: column;
    }
    .you {
      flex-direction: column-reverse;
      margin-right: 1vw;
      align-items: flex-end;
    }

    .computer {
      margin-left: 1vw;
      align-items: flex-start;
    }
    .points {
      width: 15vw;
      aspect-ratio: 4/1;
      color: var(--white);
    }
    h4 {
      margin: 0;
      font-size: 2em;
    }
  }
`;
