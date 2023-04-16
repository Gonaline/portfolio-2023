import { FunctionComponentElement, ReactElement, useContext } from 'react';
import { CollectionListStyle } from '../../../style/project3/productStyle';
import { PAGE } from '../../../enums/page.enum';
import { convertTextToPath } from '../../../shared/convertTextToPath';
import { NavLink } from 'react-router-dom';
import project3ProductCtx from '../../../context/project3CtxProduct';

const CollectionList = (): FunctionComponentElement<ReactElement> => {
  const { productData } = useContext(project3ProductCtx);

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
