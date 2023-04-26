import {
  FunctionComponentElement,
  ReactElement,
  useContext,
  useEffect,
} from 'react';
import { PageProductStyle } from '../style/stickersShop/pageProductStyle';
import stickersShopProductCtx from '../context/stickersShopProductCtx';
import Images from '../components/stickersShop/product/images';
import Personalization from '../components/stickersShop/product/personalization';
import Information from '../components/stickersShop/product/information';
import { FirstPartStyle } from '../style/stickersShop/firstPartStyle';
import { useParams } from 'react-router-dom';
import { convertTextToPath } from '../shared/convertTextToPath';
import stickersShopCtx from '../context/stickersShopCtx';
import IProductsByCollection from '../interfaces/stickersShop/productsByCollection';
import { COLLECTION } from '../enums/stickersShop/collection.enum';
import ListOfProducts from '../components/stickersShop/listOfProducts';
import Arrow from '../assets/pictures/arrow.svg';

const StickersShopProduct = (): FunctionComponentElement<ReactElement> => {
  const { productData } = useContext(stickersShopProductCtx);
  const { productsByCollection, collectionName, setProductId } =
    useContext(stickersShopCtx);

  const { id } = useParams<{ id?: string }>();

  window.innerHeight > 1000 &&
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

  const searchProductIdByConvertProductName: any = async (
    convertProductName: string
  ) => {
    const data = productsByCollection.filter(
      (e: IProductsByCollection) =>
        e.convert_product_name === convertProductName
    );
    await setProductId(data[0].product_id);
  };

  useEffect(() => {
    id &&
      id !== convertTextToPath(productData.product_name) &&
      searchProductIdByConvertProductName(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const scroll = () => {
    window.scrollTo({
      top: window.innerHeight * 0.75,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <PageProductStyle>
      {productData && (
        <>
          <FirstPartStyle>
            <section className='desktop'>
              <Images />
              <div className='right'>
                <Information />
                <Personalization />
              </div>
            </section>
            <section className='mobile'>
              <Information />
              <Images />
              <Personalization />
            </section>
            <div className='arrow'>
              <button type='button' onClick={scroll}>
                <img src={Arrow} alt='arrow' />
              </button>
            </div>
          </FirstPartStyle>

          <section className='secondPart'>
            <div>
              {collectionName === COLLECTION.ALL_COLLECTIONS ? (
                <h5>Découvrez les autres stickers</h5>
              ) : (
                <h5>
                  Découvrez les autres stickers de la collection
                  <br className='mobile' />
                  <em> {collectionName}</em>
                </h5>
              )}
            </div>
            <ListOfProducts />
          </section>
        </>
      )}
    </PageProductStyle>
  );
};
export default StickersShopProduct;
