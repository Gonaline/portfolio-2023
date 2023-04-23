import styled from 'styled-components';

export const ReplayStyle = styled.button`
  font-weight: bold;
  min-width: 6vw;
  aspect-ratio: 4/1;
  border: 0;
  font-size: 1.2rem;
  text-align: center;
  color: var(--white);
  border-radius: calc(var(--border-radius) / 2);
  background-color: var(--otherColor);
  font-family: var(--font-family);
  box-shadow: var(--box-shadow);
  p {
    color: var(--white);
    padding: 0 1vw 0 1vw;
  }
  :hover {
    background-color: var(--otherColor);
  }

  @media screen and (max-width: 700px) {
    border-radius: var(--border-radius);
    p {
      padding: 0 2vw;
    }
  }
`;
