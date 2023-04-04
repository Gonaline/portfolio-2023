import rock from '../../assets/pictures/project1/rock.png';
import paper from '../../assets/pictures/project1/paper.png';
import scissors from '../../assets/pictures/project1/scissors.png';

export const findImage = (result: string): any => {
  switch (result) {
    case 'paper':
      return paper;
    case 'rock':
      return rock;
    case 'scissors':
      return scissors;
  }
};
