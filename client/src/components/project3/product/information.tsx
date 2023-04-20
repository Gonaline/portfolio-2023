import { FunctionComponentElement, ReactElement, useContext } from 'react';
import project3ProductCtx from '../../../context/project3CtxProduct';
import CollectionList from './collectionList';
import { InformationStyle } from '../../../style/project3/informationStyle';

const Information = (): FunctionComponentElement<ReactElement> => {
  const { productData, optionChoice } = useContext(project3ProductCtx);

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
      <h5 className='size'>
        <em>{`Format: ${productData.text_size}`}</em>
      </h5>
    </InformationStyle>
  );
};
export default Information;
