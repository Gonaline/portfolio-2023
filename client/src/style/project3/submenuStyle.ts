import styled from 'styled-components';

export const SubmenuStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  min-height: 25vh;
  background-color: var(--opacityColor);
  box-shadow: var(--box-shadow);

  @media screen and (max-width: 700px) {
    height: 67vh;
  }
`;
