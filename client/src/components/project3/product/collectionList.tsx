import { FunctionComponentElement, ReactElement, useContext } from 'react';
import { CollectionListStyle } from '../../../style/project3/productStyle';
import project3Ctx from '../../../context/project3Ctx';
import { PAGE } from '../../../enums/page.enum';
import { convertTextToPath } from '../../../shared/convertTextToPath';
import { NavLink } from 'react-router-dom';

const CollectionList = (): FunctionComponentElement<ReactElement> => {
  const { categoriesOfProduct } = useContext(project3Ctx);

  return (
    <>
      {categoriesOfProduct && (
        <CollectionListStyle>
          <em>
            {categoriesOfProduct.detail.length === 1
              ? 'Collection:'
              : 'Collections:'}
          </em>
          {categoriesOfProduct.detail.map((e) => (
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
