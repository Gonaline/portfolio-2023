import styled from 'styled-components';

export const ButtonGame = styled.button`
  aspect-ratio: 1/1;
  height: 28%;
  border: none;
  border-radius: calc(var(--border-radius) / 2);
  display: flex;
  align-items: center;
  box-shadow: var(--box-shadow);
  background-size: 100%;
  background-color: var(--buttonColor);
  img {
    width: 100%;
    aspect-ratio: 1/1;
  }
  :hover {
    -ms-transform: scale(1.1); /* IE 9 */
    -webkit-transform: scale(1.1); /* Safari 3-8 */
    transform: rotate(20deg) scale(1.1);
    background-color: var(--otherColor);
  }
  @media screen and (max-width: 700px) {
    border-radius: var(--border-radius);
  }
`;

export const GameStyle = styled.section`
  height: 45vh;
  width: 55vw;
  display: flex;
  justify-content: center;

  .userChoice {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .text {
    height: 100%;
    margin: 0 9vw 0 3vw;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
  }
  @media screen and (max-width: 700px) {
    height: 45vh;
    width: 90vw;

    .userChoice {
      order: 2;
    }
    button {
      margin-left: 4vw;
    }
    .text {
      order: 1;
      text-align: right;
      margin-right: 3vw;
    }
  }
`;
