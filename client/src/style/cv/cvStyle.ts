import styled from 'styled-components';

export const CvStyle = styled.section`
  width: 69vw;
  min-height: 85vh;
  position: absolute;
  top: 15vh;
  left: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  padding: 0 0 13vh 0;

  .part {
    width: 90%;
    margin: auto;
    margin-top: 5vh;
  }
  .jobsTechnos {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    .jobs {
      width: 80%;
      em {
        line-height: 1.2rem;
      }
    }
    .technos {
      width: 20%;
      height: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      div {
        .square,
        .rectangle {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 5px;
        }
        .square {
          width: 3vw;
          aspect-ratio: 1/1;
        }
        .rectangle {
          width: 7vw;
          aspect-ratio: 2.5/1;
        }
        img {
          object-fit: contain;
        }
      }
    }
  }

  .title {
    margin-bottom: 2vh;
    min-width: 30%;
    background-color: var(--darkColor);
    display: flex;
    justify-content: left;
    align-items: center;
    border-radius: calc(var(--border-radius) / 2);
  }
  h4 {
    margin: 1vh 1vw 1vh 1vw;
    display: flex;
    color: var(--white);
  }
  h5 {
    font-weight: 600;
  }
  .text {
    margin-bottom: 2vh;
    margin-left: 2vw;
  }
  .detail {
    margin-top: 2vh;
  }
  .assignments,
  .languages {
    margin-left: 1vw;
  }
  .datesLocation em {
    color: var(--otherColor);
    .location {
      font-weight: 700;
    }
  }
  .formations .detail {
    margin-left: 1vw;
  }
  .projectLanguages,
  .languages {
    line-height: 1vh;
  }
  .skills {
    .text {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      div {
        width: 33%;
        h5 {
          margin-bottom: 1vh;
        }
        p {
          margin-left: 1vw;
        }
      }
    }
  }
  a {
    line-height: 1.4rem;
    text-decoration: underline;
    :hover {
      p,
      em {
        color: var(--buttonOnHoverColor);
      }
    }
  }

  @media screen and (max-width: 700px) {
    position: static;
    width: 100vw;

    .text {
      margin-top: 1vh;
      margin-bottom: 3vh;
    }
    .jobsTechnos {
      flex-direction: column;
      .jobs {
        width: 97%;
      }
      .technos {
        order: -1;
        width: 100%;
        background-color: var(--white-opacity80);
        border-radius: var(--border-radius);
        justify-content: space-between;
        div {
          .square {
            width: 10vw;
          }
          .rectangle {
            width: 25vw;
          }
        }
        margin-bottom: 2vh;
      }
    }
    .skills {
      .text {
        flex-wrap: wrap;
        div {
          width: 45%;
          p {
            margin-left: 5vw;
          }
        }
      }
    }
  }
`;
