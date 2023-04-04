import { FunctionComponentElement, ReactElement, useContext } from 'react';
import ProjectTitleStyle from '../style/projectTitleStyle';
import pagesCtx from '../context/pagesCtx';

const ProjectTitle = (): FunctionComponentElement<ReactElement> => {
  const { title } = useContext(pagesCtx);

  return (
    <ProjectTitleStyle>
      <h2>{title}</h2>
    </ProjectTitleStyle>
  );
};
export default ProjectTitle;
