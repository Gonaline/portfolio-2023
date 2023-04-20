import { FunctionComponentElement, ReactElement, useContext } from 'react';
import {
  FirstPartStyle,
  PageProductStyle,
} from '../style/project3/productStyle';
import project3ProductCtx from '../context/project3CtxProduct';
import Images from '../components/project3/product/images';
import Personalization from '../components/project3/product/personalization';
import Information from '../components/project3/product/information';

const Project3Product = (): FunctionComponentElement<ReactElement> => {
  const { productData } = useContext(project3ProductCtx);

  return (
    <PageProductStyle>
      {productData && (
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
      )}
    </PageProductStyle>
  );
};
export default Project3Product;
