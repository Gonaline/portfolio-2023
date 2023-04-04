import {
  FunctionComponentElement,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';
import Left from '../components/left';
import Counter from '../components/project1/counter';
import Game from '../components/project1/game';
import ProjectTitle from '../components/projectTitle';
import project1Ctx from '../context/project1Ctx';
import pageData from '../data/pages';
import dataGame from '../data/project1';
import Project1Style from '../style/project1/project1Style';
import Result from '../components/project1/result';
import pagesCtx from '../context/pagesCtx';
import { PAGE } from '../enums/page.enum';
import ReplayButton from '../style/project1/replayStyle';

const Project1 = (): FunctionComponentElement<ReactElement> => {
  const { userChoice, computer, isClick, setIsClick } = useContext(project1Ctx);
  const { setPageData } = useContext(pagesCtx);

  const [computerCounter, setComputerCounter] = useState<number>(0);
  const [userCounter, setUserCounter] = useState<number>(0);
  const [message, setMessage] = useState<string>('');
  const [userPoint, setUserPoint] = useState<number>(0);
  const [computerPoint, setComputerPoint] = useState<number>(0);
  const [countdown, setCountdown] = useState<number>(0);

  useEffect(() => {
    if (!userChoice || !computer) return;
    const game = dataGame.filter((e) => e.id === userChoice + computer)[0];
    setUserCounter(game.userPoint + userCounter);
    setComputerCounter(game.computerPoint + computerCounter);
    setMessage(game.message);
    setUserPoint(game.userPoint);
    setComputerPoint(game.computerPoint);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [computer, userChoice]);

  useEffect(() => {
    setPageData(pageData[PAGE.PROJECT1]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    isClick && setCountdown(5);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClick]);

  useEffect(() => {
    countdown > 0 && setTimeout(() => setCountdown(countdown - 1), 1000);
    setIsClick(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countdown]);

  const resetCounter = () => {
    setUserCounter(0);
    setComputerCounter(0);
  };

  return (
    <>
      <Left />
      <Project1Style>
        <ProjectTitle />
        {userCounter + computerCounter !== 0 ? (
          <Counter
            userCounter={userCounter}
            computerCounter={computerCounter}
          />
        ) : (
          <div className='empty' />
        )}
        {countdown === 0 ? (
          <Game />
        ) : (
          <Result
            message={message}
            userPoint={userPoint}
            computerPoint={computerPoint}
          />
        )}
        <div className='bottom'>
          {countdown !== 0 ? (
            <div className='countdown'>
              {countdown > 1 ? (
                <p>Replay in {countdown} seconds</p>
              ) : (
                <p>Replay in {countdown} second</p>
              )}
            </div>
          ) : (
            userCounter + computerCounter !== 0 && (
              <ReplayButton
                type='button'
                onClick={() => {
                  resetCounter();
                }}
              >
                NEW GAME
              </ReplayButton>
            )
          )}
        </div>
      </Project1Style>
    </>
  );
};
export default Project1;
