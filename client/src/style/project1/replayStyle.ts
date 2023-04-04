import styled from 'styled-components';

export default styled.button`
  font-weight: bold;
  min-width: 6vw;
  aspect-ratio: 3/1;
  border: 0;
  font-size: 1.2rem;
  text-align: center;
  color: var(--white);
  border-radius: var(--border-radius);
  background-color: var(--buttonColor);
  font-family: var(--font-family);
  box-shadow: var(--box-shadow);

  :hover {
    background-color: var(--otherColor);
  }

  @media screen and (max-width: 700px) {
    width: 25vw;

    button {
      width: 25vw;
      border: 0;
      line-height: 2.5;
      padding: 0 1vw;
      font-size: 1.2rem;
      margin-right: 5vw;
    }
  }
`;
