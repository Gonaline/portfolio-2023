import styled from 'styled-components';

export const CollectionTitleStyle = styled.div`
  width: 70vw;
  height: 7vh;
  display: flex;
  justify-content: left;
  align-items: center;
  h4 {
    padding: 1vh 0 0 2vw;
  }

  @media screen and (max-width: 700px) {
    width: 100vw;
    padding-bottom: 9vh;
  }
`;
