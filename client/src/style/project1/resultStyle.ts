import styled from 'styled-components';

export const ResultStyle = styled.section`
  height: 45vh;
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
    width: 18vw;
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
    animation-duration: 5s;
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
    width: 3vw;
    aspect-ratio: 1.5/1;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      width: 100%;
      height: 100%;
      border-radius: calc(var(--border-radius) / 2);
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--otherColor);
      p {
        color: var(--white);
        font-weight: bold;
      }
    }
    .none {
      display: none;
    }
    .userWin {
      animation-name: userWin;
      animation-duration: 3s;
    }
    .computerWin {
      animation-name: computerWin;
      animation-duration: 3s;
    }
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
  .message {
    height: 10vh;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation-name: appear;
    animation-duration: 3s;
    animation-iteration-count: none;
  }
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .none {
    display: none;
  }

  @media screen and (max-width: 700px) {
    height: 40vh;
    width: 100vw;
    display: flex;

    .result {
      height: 100%;
      width: 80vw;
      flex-wrap: wrap;
      align-items: flex-end;
      justify-content: space-between;
      .order1 {
        order: 1;
      }
      .order2 {
        order: 2;
      }
      .order3 {
        order: 3;
      }
      .order4 {
        order: 4;
      }
    }
    .choice {
      margin: 0;
      width: 36vw;
    }

    .onePoint {
      width: 36vw;
      div {
        width: 12vw;
        height: 4vh;
      }
    }
    @keyframes userWin {
      from {
        transform: translate(0, 5vh);
        opacity: 0;
      }
      to {
        transform: translate(0, 0);
        opacity: 1;
      }
    }

    @keyframes computerWin {
      from {
        transform: translate(0, 5vh);
        opacity: 0;
      }
      to {
        transform: translate(0, 0);
        opacity: 1;
      }
    }

    .message {
      width: 85%;
      padding: 3vh 0;
    }
  }
`;
