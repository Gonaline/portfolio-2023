import { FunctionComponentElement, ReactElement } from 'react';
import Left from '../components/left';
import ProjectTitle from '../components/projectTitle';
import pageData from '../data/pages';
import DataPage from '../interfaces/dataPage';
import RightStyle from '../style/rightStyle';

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
      <RightStyle color={projectData.backgroundColor}>
        <ProjectTitle title={projectData.title} />
      </RightStyle>
    </>
  );
};
export default Project1;
