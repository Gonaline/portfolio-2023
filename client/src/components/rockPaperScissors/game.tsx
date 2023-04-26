import { FunctionComponentElement, ReactElement, useContext } from 'react';
import rockPaperScissorsCtx from '../../context/rockPaperScissorsCtx';
import { ButtonGame, GameStyle } from '../../style/rockPaperScissors/gameStyle';
import { findImage } from '../../shared/rockPaperScissors/findImage';

const Game = (): FunctionComponentElement<ReactElement> => {
  const game = ['rock', 'paper', 'scissors'];
  const { setUserChoice, setComputer, setIsClick } =
    useContext(rockPaperScissorsCtx);

  const computerAnswer = () => {
    return game[Math.floor(Math.random() * 3)];
  };

  return (
    <GameStyle>
      <div className='userChoice'>
        {game.map((choice) => (
          <ButtonGame
            type='button'
            key={choice}
            value={choice}
            onClick={() => {
              setUserChoice(choice);
              setComputer(computerAnswer());
              setIsClick(true);
            }}
          >
            <img src={findImage(choice)} alt={choice} />
          </ButtonGame>
        ))}
      </div>
      <div className='text'>
        <h3>let's play!</h3>
        <h4>click on your choice</h4>
      </div>
    </GameStyle>
  );
};
export default Game;
