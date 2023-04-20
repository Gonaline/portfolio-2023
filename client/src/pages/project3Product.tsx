import {
  FunctionComponentElement,
  ReactElement,
  useContext,
  useEffect,
} from 'react';
import { PageProductStyle } from '../style/project3/pageProductStyle';
import project3ProductCtx from '../context/project3CtxProduct';
import Images from '../components/project3/product/images';
import Personalization from '../components/project3/product/personalization';
import Information from '../components/project3/product/information';
import ListOfProducts from '../components/project3/listOfProducts';
import { FirstPartStyle } from '../style/project3/firstPartStyle';
import { useParams } from 'react-router-dom';
import { convertTextToPath } from '../shared/convertTextToPath';
import project3Ctx from '../context/project3Ctx';
import IProductsByCollection from '../interfaces/project3/productsByCollection';
import { COLLECTION } from '../enums/project3/collection.enum';

const Project3Product = (): FunctionComponentElement<ReactElement> => {
  const { productData } = useContext(project3ProductCtx);
  const { productsByCollection, collectionName, setProductId } =
    useContext(project3Ctx);

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
export default Project3Product;
