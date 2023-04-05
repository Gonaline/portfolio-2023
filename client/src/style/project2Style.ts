import styled from 'styled-components';

export default styled.section`
  width: 70vw;
  height: 75vh;
  background-color: var(--backgroundColor);
  .container {
    display: flex;
    width: 100%;
    height: 100%;
  }
  .box {
    flex: 1;
    overflow: hidden;
    transition: 0.5s;
    margin: 0.3vw 0.3vw;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
    line-height: 0;
  }
  .box:hover {
    flex: 1 1 40%;
  }
  .box > img {
    width: 200%;
    height: 200%;
    object-fit: cover;
    transition: 0.5s;
    -webkit-filter: grayscale(100%); /* Chrome, Safari, Opera */
    filter: grayscale(100%); /* Firefox */
  }
  .box:hover > img {
    -webkit-filter: none;
    filter: none; /* Firefox */
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 700px) {
    width: 100vw;
    min-height: 77vh;
    padding-bottom: 9vh;

    .container {
      flex-direction: column;
    }
    .box > img {
      width: 150%;
      height: 100%;
    }
  }
`;
