import styled from 'styled-components';

export const CardStyle = styled.button`
  padding: 0;
  border: none;
  max-width: 14vw;
  margin: 1.5vw;
  border-radius: var(--border-radius);

  :hover {
    background-color: var(--buttonOnHoverColor);
  }
  img {
    border-radius: var(--border-radius) var(--border-radius) 0 0;
    width: 100%;
    aspect-ratio: 1/1;
    :hover {
      opacity: 0.5;
    }
  }
  .productName {
    width: 100%;
    height: 6vh;
    background-color: var(--buttonOnHoverColor);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    p {
      text-align: center;
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
