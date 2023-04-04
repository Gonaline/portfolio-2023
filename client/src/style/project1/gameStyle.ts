import styled from 'styled-components';

export const ButtonGame = styled.button`
  aspect-ratio: 1/1;
  height: 28%;
  margin: 0 4vw 0 6vw;
  border: none;
  border-radius: var(--border-radius);
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
  }
`;

export const GameStyle = styled.section`
  height: 46vh;
  width: 55vw;
  margin: auto;
  margin-bottom: 10vh;
  display: flex;
  .userChoice {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
  }
  h3 {
    font-weight: bold;
  }
  @media screen and (max-width: 700px) {
    height: 50vh;
    width: 90vw;
    margin: auto;
    margin-bottom: 10vh;

    .userChoice {
      order: 2;
    }
    button {
      margin: 0 4vw 0 4vw;
    }
    .text {
      order: 1;
      text-align: right;
    }
  }
`;
