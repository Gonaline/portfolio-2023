import styled from 'styled-components';

export const ProductImgStyle = styled.div`
  max-width: 35vw;
  height: 53vh;
  padding-right: 1.5vw;
  display: flex;
  justify-content: right;
  align-items: flex-end;
  .mirror {
    transform: scaleX(-1);
  }
  .file {
    margin: 0 1vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    button {
      height: 12vh;
      aspect-ratio: 1/1;
      margin-top: 2vh;
      background-size: contain;
      border-radius: calc(var(--border-radius) / 2);
      box-shadow: var(--box-shadow);

      img {
        height: 100%;
        border-radius: calc(var(--border-radius) / 2);
      }
      :hover {
        background-color: var(--buttonOnHoverColor);
        img {
          opacity: 0.5;
        }
      }
    }
  }
  .selected {
    display: none;
  }
  .bigImage {
    height: 53vh;
    aspect-ratio: 1/1;
    background-size: contain;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      border-radius: var(--border-radius);
    }
  }

  @media screen and (max-width: 700px) {
    max-width: 90vw;
    height: auto;
    padding-right: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .file {
      width: 85vw;
      position: relative;
      bottom: 1.5vh;
      height: 4vh;
      margin: 0 0 1vh 0;
      flex-direction: row;

      button {
        height: 7vh;
        margin-top: 0;
        margin: 0 1vw;
        background-size: contain;
        border-radius: var(--border-radius);

        img {
          border-radius: var(--border-radius);
        }
      }
    }

    .bigImage {
      height: auto;
      width: 90vw;

      img {
        border-radius: 0;
      }
    }
  }
`;
