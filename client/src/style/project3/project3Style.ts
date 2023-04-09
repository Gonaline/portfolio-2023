import styled from 'styled-components';

export default styled.section`
  width: 70vw;
  min-height: 75vh;
  background-color: var(--backgroundColor);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 15vh;
  left: 30vw;
  padding-bottom: 10vh;

  @media screen and (max-width: 700px) {
    width: 100vw;
    min-height: 77vh;
    padding-bottom: 9vh;
  }
`;
