import {
  FunctionComponentElement,
  ReactElement,
  useContext,
  useEffect,
} from 'react';
import { useParams } from 'react-router-dom';
import stickersShopCtx from '../context/stickersShopCtx';
import stickersShopProductCtx from '../context/stickersShopProductCtx';
import CollectionTitle from '../components/stickersShop/product/collectionTitle';
import ListOfProducts from '../components/stickersShop/listOfProducts';

const StickersShopCategory = (): FunctionComponentElement<ReactElement> => {
  const { collection } = useParams<{ collection?: string }>();
  const { collectionConvertName, setCollectionConvertName } =
    useContext(stickersShopCtx);
  const { resetProductData } = useContext(stickersShopProductCtx);

  window.innerHeight > 1000 &&
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

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
export default StickersShopCategory;
