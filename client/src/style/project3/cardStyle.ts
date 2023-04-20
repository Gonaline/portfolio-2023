import styled from 'styled-components';

export const CardStyle = styled.button`
  border: none;
  width: 14vw;
  aspect-ratio: 1/1;
  margin: 0 1.5vw -22.5vh 1.5vw;
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    border-radius: var(--border-radius);
    width: 100%;
    aspect-ratio: 1/1;
  }

  .productName {
    position: relative;
    bottom: 14vw;
    left: 0;
    border-radius: var(--border-radius);
    width: 100%;
    aspect-ratio: 1/1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--white);
    text-align: center;
    .name {
      position: relative;
      top: 2vh;
      width: 80%;
      height: 5vw;
      display: flex;
      justify-content: center;
      align-items: center;
      display: none;
      h4 {
        font-size: 1.3rem;
      }
    }
    .add {
      position: relative;
      top: 9vh;
      width: 2vw;
      aspect-ratio: 1/1;
      border-radius: 1vw;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--buttonOnHoverColor);
      display: none;

      p {
        font-size: 1.5rem;
        padding-bottom: 0.2rem;
      }
    }
  }

  :hover {
    border-radius: 7vw;
    h5,
    p {
      color: var(--white);
    }
    img {
      border-radius: 7vw;
    }
    .productName {
      border-radius: 7vw;
      background-color: var(--otherColor);
      .name,
      .add {
        display: flex;
      }
      .add {
        :hover {
          display: flex;
          -ms-transform: scale(1.5);
          -webkit-transform: scale(1.5);
          transform: scale(1.5);
        }
      }
    }
  }
  @media screen and (max-width: 700px) {
    width: 44vw;
    margin: auto;
    margin-bottom: 3vh;
    border-radius: 3vh 3vh 0 0;
    :last-child {
      padding-bottom: 13vh;
    }
    img {
      border-radius: 3vh 3vh 0 0;
    }

    .productName {
      background-color: var(--mainColor);
      position: static;
      border-radius: 0 0 3vh 3vh; //
      width: 100%;
      aspect-ratio: 4/1;
      display: flex;
      .name {
        position: static;
        top: 0vh;
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        h5 {
          font-size: 0.9rem;
          line-height: 1rem;
        }
      }
    }
  }
`;
