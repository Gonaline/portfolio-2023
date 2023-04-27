import { FunctionComponentElement, ReactElement, useContext } from 'react';
import stickersShopProductCtx from '../../../context/stickersShopProductCtx';
import CollectionList from './collectionList';
import { InformationStyle } from '../../../style/stickersShop/informationStyle';

const Information = (): FunctionComponentElement<ReactElement> => {
  const { productData, optionChoice } = useContext(stickersShopProductCtx);

  return (
    <InformationStyle>
      <div className='titleAndPrice'>
        <div className='title'>
          <h4>{productData.product_name}</h4>
        </div>

        <div className='price'>
          <h5>
            {productData.option !== null && optionChoice
              ? `Prix: ${productData.price + optionChoice.price} €`
              : `Prix: ${productData.price} €`}
          </h5>
        </div>
      </div>
      <CollectionList />
      <h5 className='introduction'>{productData.text_introduction}</h5>
      <p className='size'>
        <em>{`Format: ${productData.text_size}`}</em>
      </p>
    </InformationStyle>
  );
};
export default Information;
