import styled from 'styled-components';

export const ResultStyle = styled.section`
  height: 46vh;
  width: 55vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .result {
    height: 35vh;
    display: flex;
    align-items: center;
    justify-content: left;
  }
  .choice {
    margin: 0 1vw 0 1vw;
    border-radius: var(--border-radius);
    background-color: var(--buttonColor);
    height: 35vh;
    aspect-ratio: 1/1;
    img {
      width: 100%;
    }
  }
  .computer {
    transform: scaleX(-1);
  }

  .delete {
    animation-name: deleteLoser;
    animation-duration: 3s;
    animation-iteration-count: none;
  }
  @keyframes deleteLoser {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.2;
    }
  }
  .onePoint {
    height: 4vh;
    aspect-ratio: 1.5/1;
    margin: auto;
    border-radius: var(--border-radius);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--otherColor);
    color: var(--white);
    text-align: center;
    animation-duration: 2s;
    animation-iteration-count: 1;
    font-weight: bold;
  }
  .userWin {
    animation-name: userWin;
    animation-duration: 3s;
  }
  @keyframes userWin {
    from {
      transform: translate(5vw, 0px);
      opacity: 0;
    }
    to {
      transform: translate(0px, 0);
      opacity: 1;
    }
  }
  .computerWin {
    animation-name: computerWin;
    animation-duration: 3s;
  }
  @keyframes computerWin {
    from {
      transform: translate(-5vw, 0px);
      opacity: 0;
    }
    to {
      transform: translate(0px, 0);
      opacity: 1;
    }
  }

  .none {
    background: none;
  }
  .message {
    height: 10vh;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation-name: appear;
    animation-duration: 3s;
    h3 {
      font-weight: bold;
    }
  }
  @keyframes appear {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.2;
    }
  }

  @media screen and (max-width: 700px) {
    height: 30vh;
    width: 100vw;
    margin: auto;
    justify-content: space-between;
    align-items: center;

    .result {
      height: 18vh;
      width: 100%;
      justify-content: center;
    }
    .onePoint {
      height: 3vh;
      aspect-ratio: 1.5/1;
      margin: 1vw;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-weight: bold;
    }
    .choice {
      height: 15vh;
    }
    .message {
      height: 10vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
