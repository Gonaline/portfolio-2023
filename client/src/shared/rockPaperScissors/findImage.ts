import rock from '../../assets/pictures/rock-paper-scissors/rock.png';
import paper from '../../assets/pictures/rock-paper-scissors/paper.png';
import scissors from '../../assets/pictures/rock-paper-scissors/scissors.png';

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
