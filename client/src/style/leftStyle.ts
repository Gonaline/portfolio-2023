import styled from 'styled-components';

export default styled.section`
  background-color: var(--darkColor);
  width: 30vw;
  height: 75vh;
  display: flex;
  align-items: center;
  div {
    margin-bottom: 10vh;
  }
  p,
  h2,
  h4 {
    margin: 0 2.5vw 0 2.5vw;
  }
  .subTitle {
    margin-bottom: 2vh;
    opacity: 0.5;
  }
  p,
  h4 {
    color: var(--white);
  }
  h2 {
    color: var(--mainColor);
    margin-bottom: 6vh;
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
    width: 100vw;
    min-height: 77vh;
    margin-top: 14vh;
    align-items: flex-end;
    justify-content: space-between;
    h2 {
      padding-top: 2vh;
    }
    h2,
    p,
    h4 {
      margin-top: 6vw;
      margin-right: 6vw;
      margin-left: 6vw;
    }
  }
`;
