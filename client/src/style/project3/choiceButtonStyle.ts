import styled from 'styled-components';

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
    height: 6vh;
    width: 45vw;
    background-color: none;
    border-top: var(--mainColor) 2px solid;

    img {
      height: 5vh;
      margin: 0 2vw 0 1vw;
    }
    p {
      font-size: 0.9rem;
      line-height: 1.1rem;
    }
    :hover {
      border-radius: none;
    }
  }
`;
