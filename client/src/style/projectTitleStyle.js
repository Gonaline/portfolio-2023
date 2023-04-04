import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 12vh;
  width: 100%;
  h2 {
    font-weight: bold;
    padding-left: 2vw;
  }
  @media screen and (max-width: 700px) {
    justify-content: flex-start;
    margin: auto;
    width: 100%;
    margin-bottom: 3vh;
    h2 {
      text-align: center;
      padding-left: 0;
      padding-top: 2vh;
      font-size: 2.5em;
    }
  }
`;
