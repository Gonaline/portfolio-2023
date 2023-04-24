import styled from 'styled-components';

export const ChoiceStyle = styled.div`
  h5 {
    padding-bottom: 0.8vh;
  }
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: var(--white-opacity50);
  border-radius: calc(var(--border-radius) / 2);
  padding: 0.8vh 0.8vw 0vh 0.8vw;
  margin-bottom: 1.2vh;
  .choice {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;

    button {
      width: 2vw;
      aspect-ratio: 1/1;
      border-radius: 1vw;
      margin-right: 0.5vw;
      margin-bottom: 1vh;
      background-size: contain;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: var(--box-shadow);

      :hover {
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        background-color: var(--buttonOnHoverColor);
        border: 2px solid var(--buttonOnHoverColor);
      }
      img {
        width: 100%;
        border-radius: 1vw;
        :hover {
          opacity: 0.5;
        }
      }
    }
    .selected {
      border: 2px solid var(--buttonOnHoverColor);
      background-color: var(--buttonOnHoverColor);
    }
  }

  @media screen and (max-width: 700px) {
    h5 {
      padding-bottom: 0.8vh;
    }
    width: 84vw;
    border-radius: calc(var(--border-radius) * 2);
    padding: 0.8vh 3vw 0vh 3vw;
    .choice {
      button {
        width: 9vw;
        border-radius: 4.5vw;
        margin-right: 3vw;
        margin-bottom: 1vh;
      }
      .selected {
        border: 3px solid var(--buttonOnHoverColor);
      }
    }
  }
`;
