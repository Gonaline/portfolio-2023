import { FunctionComponentElement, ReactElement, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { COLLECTION } from '../enums/stickersShop/collection.enum';
import stickersShopCtx from '../context/stickersShopCtx';
import { NavbarStyle } from '../style/navbarStyle';
import dataPage from '../data/pages';
import { PAGE } from '../enums/page.enum';

const Navbar = (): FunctionComponentElement<ReactElement> => {
  const { setCollectionConvertName, setCollectionName } =
    useContext(stickersShopCtx);

  return (
    <NavbarStyle>
      <li>
        <NavLink to={PAGE.ABOUT_PATH} className='link mainLink'>
          {dataPage.about.subtitle}
        </NavLink>
      </li>

      <li>
        PROJETS
        <ul>
          <NavLink to={PAGE.PROJECT1_PATH} className='link'>
            <p>{dataPage.project1.title}</p>
          </NavLink>
          <NavLink to={PAGE.PROJECT2_PATH} className='link'>
            <p>{dataPage.project2.title}</p>
          </NavLink>
          <NavLink
            to={`${PAGE.PROJECT3_PATH}/${COLLECTION.ALL_COLLECTIONS_CONVERT_NAME}`}
            className='link'
            onClick={() => {
              setCollectionConvertName(COLLECTION.ALL_COLLECTIONS_CONVERT_NAME);
              setCollectionName(COLLECTION.ALL_COLLECTIONS);
            }}
          >
            <p>{dataPage.project3.title}</p>
          </NavLink>
        </ul>
      </li>
    </NavbarStyle>
  );
};
export default Navbar;
