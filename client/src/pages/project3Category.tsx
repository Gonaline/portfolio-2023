import {
  FunctionComponentElement,
  ReactElement,
  useContext,
  useMemo,
} from 'react';
import Left from '../components/left';
import CategoryNav from '../components/project3/categoryNav';
import Project3Style from '../style/project3/project3Style';
import ListOfProducts from '../components/project3/listOfProducts';
import { useParams } from 'react-router-dom';
import project3Ctx from '../context/project3Ctx';

const Project3Category = (): FunctionComponentElement<ReactElement> => {
  const { category } = useParams<{ category?: string }>();
  const { collectionConvertName, setCollectionConvertName } =
    useContext(project3Ctx);

  useMemo(() => {
    if (category) {
      setCollectionConvertName(category);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  console.log(category);
  return (
    <>
      <Left />
      <Project3Style>
        <CategoryNav />
        <h4>{collectionConvertName}</h4>
        <ListOfProducts />
      </Project3Style>
    </>
  );
};
export default Project3Category;
