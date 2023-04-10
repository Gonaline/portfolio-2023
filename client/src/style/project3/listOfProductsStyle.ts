import styled from 'styled-components';

export const CardStyle = styled.button`
  padding: 0;
  border: none;
  width: 14vw;
  aspect-ratio: 1/1;
  margin: 1.5vw;
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: -26.5vh;

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
`;

export const ListOfProductsStyle = styled.section`
  width: 69vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media screen and (max-width: 700px) {
    width: 100vw;
    min-height: 77vh;
    padding-bottom: 9vh;
  }
`;
