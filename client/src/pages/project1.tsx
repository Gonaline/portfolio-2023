import { FunctionComponentElement, ReactElement } from 'react';
import Left from '../components/left';
import Game from '../components/project1/game';
import ProjectTitle from '../components/projectTitle';
import pageData from '../data/pages';
import DataPage from '../interfaces/dataPage';
import Project1Style from '../style/project1/project1Style';

const Project1 = (): FunctionComponentElement<ReactElement> => {
  const projectData: DataPage = pageData.filter((e) => e.id === 'PROJECT1')[0];

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
      </Project1Style>
    </>
  );
};
export default Project1;
