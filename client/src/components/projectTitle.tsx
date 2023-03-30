import { FunctionComponentElement, ReactElement } from 'react';
import ProjectTitleStyle from '../style/projectTitleStyle';

interface ProjectTitleProps {
  title: string;
}
const ProjectTitle = ({
  title,
}: ProjectTitleProps): FunctionComponentElement<ReactElement> => {
  return (
    <ProjectTitleStyle>
      <h2>{title}</h2>
    </ProjectTitleStyle>
  );
};
export default ProjectTitle;
