import { FunctionComponentElement, ReactElement, useContext } from 'react';
import { convertTextToPath } from '../../../shared/convertTextToPath';
import { NavLink } from 'react-router-dom';
import stickersShopProductCtx from '../../../context/stickersShopProductCtx';
import { CollectionListStyle } from '../../../style/stickersShop/collectionListStyle';
import { PAGE } from '../../../enums/page.enum';

const CollectionList = (): FunctionComponentElement<ReactElement> => {
  const { productData } = useContext(stickersShopProductCtx);

  return (
    <>
      {productData.collections && (
        <CollectionListStyle>
          <em>
            {productData.collections.detail.length === 1
              ? 'Collection:'
              : 'Collections:'}
          </em>
          {productData.collections.detail.map((e) => (
            <NavLink
              key={e}
              to={`/${PAGE.PROJECT3_PATH}/${convertTextToPath(e)}`}
            >
              <em>{e}</em>
            </NavLink>
          ))}
        </CollectionListStyle>
      )}
    </>
  );
};
export default CollectionList;
