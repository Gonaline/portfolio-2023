import { FunctionComponentElement, ReactElement } from 'react';
import Left from '../components/left';
import CategoryNav from '../components/project3/categoryNav';
import Project3Style from '../style/project3/project3Style';

const Project3Product = (): FunctionComponentElement<ReactElement> => {
  return (
    <>
      <Left />
      <Project3Style>
        <CategoryNav />
        <h4>ID</h4>
      </Project3Style>
    </>
  );
};
export default Project3Product;
