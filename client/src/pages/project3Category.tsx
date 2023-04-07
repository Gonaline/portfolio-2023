import {
  FunctionComponentElement,
  ReactElement,
  useMemo,
  useState,
} from 'react';
import Left from '../components/left';
import CategoryNav from '../components/project3/categoryNav';
import Project3Style from '../style/project3/project3Style';
import ListOfProducts from '../components/project3/listOfProducts';
import { useParams } from 'react-router-dom';
import { COLLECTION } from '../enums/project3/collection.enum';

const Project3Category = (): FunctionComponentElement<ReactElement> => {
  const { category } = useParams<{ category?: string }>();

  const [collection, setCollection] = useState<string>(
    COLLECTION.ALL_COLLECTIONS_CONVERT_NAME
  );

  useMemo(() => {
    if (category) {
      setCollection(category);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  console.log(category);
  return (
    <>
      <Left />
      <Project3Style>
        <CategoryNav />
        <h4>{collection}</h4>
        <ListOfProducts />
      </Project3Style>
    </>
  );
};
export default Project3Category;
