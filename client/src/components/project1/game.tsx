import { FunctionComponentElement, ReactElement, useContext } from 'react';
import styled from 'styled-components';
import project1Ctx from '../../context/project1Ctx';
import GameStyle from '../../style/project1/gameStyle';

const Button = styled.button`
  background: ${(props: any) =>
      `url(${require(`../../assets/pictures/project1/${props.value}.png`)})`},
    ${(props) => props.color};
`;

interface GameProps {
  buttonColor: string | undefined;
  buttonOnHoverColor: string | undefined;
}

const Game = ({
  buttonColor,
  buttonOnHoverColor,
}: GameProps): FunctionComponentElement<ReactElement> => {
  const game = ['rock', 'paper', 'scissors'];
  const { setUserChoice, setComputer } = useContext(project1Ctx);

  const computerAnswer = () => {
    return game[Math.floor(Math.random() * 3)];
  };

  return (
    <GameStyle color={buttonOnHoverColor}>
      <div className='userChoice'>
        {game.map((choice) => (
          <Button
            color={buttonColor}
            type='button'
            key={choice}
            value={choice}
            onClick={() => {
              setUserChoice(choice);
              setComputer(computerAnswer());
            }}
          />
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
