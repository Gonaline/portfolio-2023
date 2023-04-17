import styled from 'styled-components';

export const PageProductStyle = styled.section`
  width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 700px) {
  }
`;

export const FirstPartStyle = styled.div`
  width: 70vw;
  height: 53vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 7vh 0;

  @media screen and (max-width: 700px) {
  }
`;

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
      border-radius: var(--border-radius);
      img {
        height: 100%;
        border-radius: var(--border-radius);
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
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      border-radius: var(--border-radius);
    }
  }

  @media screen and (max-width: 700px) {
    width: 100vw;
    padding-bottom: 9vh;
  }
`;

export const RightStyle = styled.section`
  width: 32vw;
  height: 53vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  h5 {
    font-size: 1rem;
    line-height: 1.3rem;
  }

  .introduction {
    padding-bottom: 2vh;
  }

  .size {
    padding-top: 2vh;
    padding-bottom: 1vh;
  }
  .price {
    padding-top: 2.5vh;
  }

  @media screen and (max-width: 700px) {
  }
`;

export const ChoiceStyle = styled.div`
  h5 {
    padding-bottom: 1vh;
  }
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: var(--white-opacity50);
  border-radius: calc(var(--border-radius) / 2);
  padding: 1vh 1vw 0vh 1vw;
  margin-bottom: 2vh;

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
  }
`;

export const CollectionListStyle = styled.div`
  em {
    color: var(--buttonOnHoverColor);
    margin-right: 0.1rem;
  }
  a {
    em {
      padding: 0.2rem 0.4rem;
      font-weight: bold;
      :hover {
        background-color: var(--buttonOnHoverColor);

        color: var(--white);
      }
    }
  }
  padding-bottom: 1.5vh;

  @media screen and (max-width: 700px) {
  }
`;
