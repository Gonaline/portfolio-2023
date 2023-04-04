import { FunctionComponentElement, ReactElement, useContext } from 'react';
import project1Ctx from '../../context/project1Ctx';
import { ResultStyle } from '../../style/project1/resultStyle';
import { findImage } from '../../shared/project1/findImage';

interface ResultProps {
  message: string;
  userPoint: number;
  computerPoint: number;
}

const Result = ({
  message,
  userPoint,
  computerPoint,
}: ResultProps): FunctionComponentElement<ReactElement> => {
  const { userChoice, computer } = useContext(project1Ctx);

  return (
    <ResultStyle>
      <div className='result'>
        {userPoint === 0 ? (
          <div className='onePoint none' />
        ) : (
          <div className='onePoint userWin'>
            <p>+1</p>
          </div>
        )}

        <div
          className={`user choice ${
            userPoint === 0 && computerPoint === 1 ? 'delete' : ''
          } 
            `}
        >
          <img src={findImage(userChoice)} alt='userChoice' />
        </div>

        <div
          className={`computer choice ${
            userPoint === 1 && computerPoint === 0 ? 'delete' : ''
          } 
            `}
        >
          <img src={findImage(computer)} alt='computer' />
        </div>

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
