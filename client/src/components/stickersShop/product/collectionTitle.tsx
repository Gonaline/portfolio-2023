import { FunctionComponentElement, ReactElement, useContext } from 'react';
import { CollectionTitleStyle } from '../../../style/stickersShop/collectionTitleStyle';
import stickersShopCtx from '../../../context/stickersShopCtx';
import { FOLDER } from '../../../enums/stickersShop/folder.enum';
import { PAGE } from '../../../enums/page.enum';

const CollectionTitle = (): FunctionComponentElement<ReactElement> => {
  const { collectionName, collectionImage } = useContext(stickersShopCtx);

  return (
    <CollectionTitleStyle>
      {collectionImage && (
        <div className='collectionImage'>
          <img
            src={require(`../../../assets/pictures/${PAGE.PROJECT3_PATH}/${FOLDER.CATEGORIES}/${collectionImage}`)}
            alt='collection'
          />
        </div>
      )}
      <h4>{collectionName}</h4>
    </CollectionTitleStyle>
  );
};
export default CollectionTitle;
