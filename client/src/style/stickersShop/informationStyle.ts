import styled from 'styled-components';

export const InformationStyle = styled.section`
  width: 32vw;
  min-height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  .titleAndPrice {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title,
    .price {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .price {
      border-radius: calc(var(--border-radius) / 4);
      transform: rotate(12deg);
      background-color: var(--darkColor);
      display: flex;
      h5 {
        color: var(--white);
        padding: 6px;
        text-align: center;
      }
    }
  }
  h5 {
    font-size: 1rem;
    line-height: 1.3rem;
  }

  .introduction {
    padding-bottom: 0.5vh;
  }

  .size {
    padding-bottom: 2vh;
  }

  @media screen and (max-width: 700px) {
    width: 90vw;

    .titleAndPrice {
      .price {
        border-radius: var(--border-radius);
      }
    }
  }
`;
