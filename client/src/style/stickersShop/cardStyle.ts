import styled from 'styled-components';

export const CardStyle = styled.button`
  width: 14vw;
  aspect-ratio: 1/1;
  position: relative;
  margin: 0.5vh 1.5vw 5.5vh 1.5vw;

  .productName,
  img {
    border-radius: var(--border-radius);
    display: flex;
    flex-direction: column;
    width: 100%;
    aspect-ratio: 1/1;
  }

  .productName {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    background-color: var(--otherColor);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s ease;
    transform: translate(-50%, -50%);

    .name {
      height: 100%;
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .title {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

        h5 {
          display: block;
          width: 90%;
          color: var(--white);
        }
      }
    }
  }

  :hover {
    .productName {
      opacity: 1;
      .image {
        opacity: 0;
      }
    }
  }

  .image {
    transition: 0.5s ease;
  }

  @media screen and (max-width: 700px) {
    width: 45vw;
    position: static;
    margin-bottom: 3vh;

    .productName,
    img {
      border-radius: 4vw 4vw 0 0;
      display: flex;
    }

    .productName {
      opacity: 1;
      position: static;
      height: 6vh;
      border-radius: 0 0 4vw 4vw;
      background-color: var(--white-opacity80);
      transition: none;
      transform: none;

      .name {
        height: 6vh;
        .title {
          h5 {
            color: var(--darkColor);
            font-weight: 0;
            font-size: 1rem;
            line-height: 1.1rem;
            padding: 0;
          }
        }
      }
    }
  }
`;
