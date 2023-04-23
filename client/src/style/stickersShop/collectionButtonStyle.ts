import styled from 'styled-components';

export const CollectionButtonStyle = styled.button`
  height: 8vh;
  width: 15vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  .onOff {
    width: 2vw;
    aspect-ratio: 1/1;
    background-color: var(--darkColor);
    border-radius: 1vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.5vw;
    p {
      color: var(--white);
      font-size: 2rem;
    }
    .on {
      padding-bottom: 0.2rem;
    }
    .off {
      padding-bottom: 0.5rem;
    }
  }

  :hover {
    color: var(--mainColor);
    .onOff {
      background-color: var(--mainColor);
    }
  }

  @media screen and (max-width: 700px) {
    width: 100vw;
    .onOff {
      background-color: var(--darkColor);
      width: 8vw;
      border-radius: 4vw;
      margin-right: 2vw;
    }
  }
`;
