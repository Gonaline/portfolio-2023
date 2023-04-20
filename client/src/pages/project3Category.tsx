import {
  FunctionComponentElement,
  ReactElement,
  useContext,
  useEffect,
} from 'react';
import { useParams } from 'react-router-dom';
import project3Ctx from '../context/project3Ctx';
import { CollectionTitleStyle } from '../style/project3/collectionTitleStyle';
import project3ProductCtx from '../context/project3CtxProduct';
import { PAGE } from '../enums/page.enum';
import { FOLDER } from '../enums/project3/folder.enum';
import ListOfProducts from '../components/project3/listOfProducts';

const Project3Category = (): FunctionComponentElement<ReactElement> => {
  const { collection } = useParams<{ collection?: string }>();
  const {
    collectionName,
    collectionConvertName,
    setCollectionConvertName,
    collectionImage,
  } = useContext(project3Ctx);
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
      <CollectionTitleStyle>
        <div>
          <img
            src={require(`../assets/pictures/${PAGE.PROJECT3}/${FOLDER.CATEGORIES}/${collectionImage}`)}
            alt='collection'
          />
        </div>
        <h4>{collectionName}</h4>
      </CollectionTitleStyle>
      <ListOfProducts />
    </>
  );
};
export default Project3Category;
