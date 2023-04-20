import styled from 'styled-components';

export const CollectionTitleStyle = styled.div`
  width: 70vw;
  height: 12vh;
  display: flex;
  justify-content: left;
  align-items: center;
  h4 {
    padding-left: 2vw;
  }
  div {
    display: none;
  }

  @media screen and (max-width: 700px) {
    padding-top: 2vh;
    width: 100vw;
    flex-direction: column;
    justify-content: center;
    div {
      width: 12vw;
      aspect-ratio: 1/1;
      display: flex;
      justify-content: left;
      align-items: center;
      img {
        width: 100%;
      }
    }
    h4 {
      padding-left: 0;
      padding-top: 1vh;
      padding-bottom: 3vh;
      font-size: 1.3rem;
    }
  }
`;
