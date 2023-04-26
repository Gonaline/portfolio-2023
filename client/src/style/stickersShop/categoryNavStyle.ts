import styled from 'styled-components';

export const CategoryNavStyle = styled.section`
  width: 70vw;
  background-color: var(--opacityColor);
  box-shadow: var(--box-shadow);
  display: flex;
  flex-wrap: nowrap;
  justify-content: left;
  align-items: center;
  a {
    text-decoration: none;
    color: var(--darkColor);
  }
  .isOpen {
    box-shadow: none;
  }

  @media screen and (max-width: 700px) {
    width: 100vw;
    justify-content: center;
  }
`;
