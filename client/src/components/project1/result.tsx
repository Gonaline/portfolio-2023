import { FunctionComponentElement, ReactElement, useContext } from 'react';
import ResultStyle from '../../style/project1/resultStyle';
import project1Ctx from '../../context/project1Ctx';
import styled from 'styled-components';

interface CounterProps {
  color: string | undefined;
  otherColor: string | undefined;
  message: string | undefined;
  userPoint: number;
  computerPoint: number;
}
const Result = ({
  color,
  otherColor,
  message,
  userPoint,
  computerPoint,
}: CounterProps): FunctionComponentElement<ReactElement> => {
  const { userChoice, computer } = useContext(project1Ctx);

  const UserDiv = styled.div`
    background: ${computer !== '' &&
      `url(${require(`../../assets/pictures/project1/${userChoice}.png`)})`},
      ${color};
  `;

  const ComputerDiv = styled.div`
    background: ${computer !== '' &&
      `url(${require(`../../assets/pictures/project1/${computer}.png`)})`},
      ${color};
  `;

  return (
    <ResultStyle color={otherColor}>
      <div className='result'>
        {userPoint === 0 ? (
          <div className='onePoint none' />
        ) : (
          <div className='onePoint userWin'>
            <p>+1</p>
          </div>
        )}
        <UserDiv
          className={`choice user ${
            userPoint === 0 && computerPoint === 1 ? 'delete' : ''
          } 
            `}
        />
        <ComputerDiv
          className={`choice computer ${
            userPoint === 1 && computerPoint === 0 ? 'delete' : ''
          } 
            `}
        />
        {computerPoint === 0 ? (
          <div className='onePoint none' />
        ) : (
          <div className='onePoint computerWin'>
            <p>+1</p>
          </div>
        )}
      </div>
      <div className='message'>
        <h3>{message}</h3>
      </div>
    </ResultStyle>
  );
};
export default Result;
