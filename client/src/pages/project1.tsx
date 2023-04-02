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
import DataPage from '../interfaces/dataPage';
import Project1Style from '../style/project1/project1Style';

const Project1 = (): FunctionComponentElement<ReactElement> => {
  const { userChoice, computer } = useContext(project1Ctx);

  const [computerCounter, setComputerCounter] = useState<number>(0);
  const [userCounter, setUserCounter] = useState<number>(0);

  const projectData: DataPage = pageData.filter((e) => e.id === 'PROJECT1')[0];

  useEffect(() => {
    if (!userChoice || !computer) return;
    const game = dataGame.filter((e) => e.id === userChoice + computer)[0];
    setUserCounter(game.userPoint + userCounter);
    setComputerCounter(game.computerPoint + computerCounter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [computer, userChoice]);

  return (
    <>
      <Left
        title={projectData.title}
        subtitle={projectData.subtitle}
        description={projectData.description}
        textColor={projectData.textColor}
      />
      <Project1Style color={projectData.backgroundColor}>
        <ProjectTitle title={projectData.title} />
        <Game
          buttonColor={projectData.textColor}
          onHoverButtonColor={projectData.otherColor}
        />
        <Counter
          color={projectData.textColor}
          userCounter={userCounter}
          computerCounter={computerCounter}
        />
      </Project1Style>
    </>
  );
};
export default Project1;
