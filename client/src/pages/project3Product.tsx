import { FunctionComponentElement, ReactElement, useContext } from 'react';
import { PageProductStyle } from '../style/project3/pageProductStyle';
import project3ProductCtx from '../context/project3CtxProduct';
import Images from '../components/project3/product/images';
import Personalization from '../components/project3/product/personalization';
import Information from '../components/project3/product/information';
import ListOfProducts from '../components/project3/listOfProducts';
import { FirstPartStyle } from '../style/project3/firstPartStyle';

const Project3Product = (): FunctionComponentElement<ReactElement> => {
  const { productData } = useContext(project3ProductCtx);
  window.scrollTo(0, 0);

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
            <h4>{`Découvrez les autres stickers de la collection ${productData.collections.main_category} ...`}</h4>
            <ListOfProducts />
          </section>
        </>
      )}
    </PageProductStyle>
  );
};
export default Project3Product;
