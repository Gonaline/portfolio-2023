import styled from 'styled-components';

export default styled.section`
  width: 70vw;
  height: 75vh;
  background-color: var(--backgroundColor);

  @media screen and (max-width: 700px) {
    width: 100vw;
    min-height: 77vh;
    padding-bottom: 9vh;
  }
`;