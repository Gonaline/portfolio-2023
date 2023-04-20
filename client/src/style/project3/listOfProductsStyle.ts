import styled from 'styled-components';

export const ListOfProductsStyle = styled.section`
  width: 70vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (max-width: 700px) {
    width: 100vw;
    min-height: 75vh;
    justify-content: space-evenly;
    align-items: center;
    padding-bottom: 0;
    margin-bottom: 22vw;
  }
`;
