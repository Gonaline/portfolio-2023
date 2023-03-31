import styled from 'styled-components';

export default styled.section`
  width: 70vw;
  height: 75vh;
  background-color: ${(props: any): string | undefined => {
    return `${props.color}`;
  }};
  display: flex;

  @media screen and (max-width: 700px) {
    width: 100vw;
    min-height: 77vh;
  }
`;
