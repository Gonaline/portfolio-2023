import { FunctionComponentElement, ReactElement } from 'react';
import Left from '../components/left';
import pageData from '../data/pages';
import DataPage from '../interfaces/dataPage';

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
    </>
  );
};
export default Project1;
