import { FunctionComponentElement, ReactElement, useContext } from 'react';
import ProjectTitleStyle from '../style/projectTitleStyle';
import GlobalCtx from '../context/globalCtx';

const ProjectTitle = (): FunctionComponentElement<ReactElement> => {
  const { title } = useContext(GlobalCtx);

  return (
    <ProjectTitleStyle>
      <h2>{title}</h2>
    </ProjectTitleStyle>
  );
};
export default ProjectTitle;
