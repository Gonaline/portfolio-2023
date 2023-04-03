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
import Replay from '../components/project1/replay';
import pagesCtx from '../context/pagesCtx';
import { PAGE } from '../enums/page.enum';

const Project1 = (): FunctionComponentElement<ReactElement> => {
  const { userChoice, computer } = useContext(project1Ctx);
  const {
    title,
    setTitle,
    subtitle,
    setSubtitle,
    description,
    setDescription,
    setTheme,
  } = useContext(pagesCtx);

  const [computerCounter, setComputerCounter] = useState<number>(0);
  const [userCounter, setUserCounter] = useState<number>(0);
  const [message, setMessage] = useState<string>('');
  const [userPoint, setUserPoint] = useState<number>(0);
  const [computerPoint, setComputerPoint] = useState<number>(0);

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
    setTheme(pageData[PAGE.PROJECT1].theme);
    setTitle(pageData[PAGE.PROJECT1].title);
    setSubtitle(pageData[PAGE.PROJECT1].subtitle);
    setDescription(pageData[PAGE.PROJECT1].description);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Left title={title} subtitle={subtitle} description={description} />
      <Project1Style>
        <ProjectTitle title={title} />
        <Game />
        <Counter userCounter={userCounter} computerCounter={computerCounter} />
        <Result
          message={message}
          userPoint={userPoint}
          computerPoint={computerPoint}
        />
        <Replay />
      </Project1Style>
    </>
  );
};
export default Project1;
