import {
  FunctionComponentElement,
  ReactElement,
  useContext,
  useEffect,
} from 'react';
import { useParams } from 'react-router-dom';
import project3Ctx from '../context/project3Ctx';
import project3ProductCtx from '../context/project3CtxProduct';
import ListOfProducts from '../components/project3/listOfProducts';
import CollectionTitle from '../components/project3/product/collectionTitle';

const Project3Category = (): FunctionComponentElement<ReactElement> => {
  const { collection } = useParams<{ collection?: string }>();
  const { collectionConvertName, setCollectionConvertName } =
    useContext(project3Ctx);
  const { resetProductData } = useContext(project3ProductCtx);

  window.scrollTo(0, 0);

  useEffect(() => {
    resetProductData();
    collection &&
      collection !== collectionConvertName &&
      setCollectionConvertName(collection);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <CollectionTitle />
      <ListOfProducts />
    </>
  );
};
export default Project3Category;
