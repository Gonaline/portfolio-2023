import {
  FunctionComponentElement,
  ReactElement,
  useContext,
  useState,
} from 'react';
import { NavLink } from 'react-router-dom';
import { COLLECTION } from '../enums/stickersShop/collection.enum';
import stickersShopCtx from '../context/stickersShopCtx';
import { BurgerStyle } from '../style/burgerStyle';
import dataPage from '../data/pages';
import { PAGE } from '../enums/page.enum';

const Burger = (): FunctionComponentElement<ReactElement> => {
  const { setCollectionConvertName, setCollectionName } =
    useContext(stickersShopCtx);
  const [burgerOpen, setBurgerOpen] = useState(false);

  return (
    <BurgerStyle>
      <button
        type='button'
        onClick={() => setBurgerOpen(!burgerOpen)}
        className={`hamburger ${burgerOpen}`}
      >
        <div className='burger burger1' />
        <div className='burger burger2' />
        <div className='burger burger3' />
      </button>
      {burgerOpen && (
        <li>
          <NavLink
            to={PAGE.ABOUT_PATH}
            className='link'
            onClick={() => setBurgerOpen(false)}
          >
            {[dataPage.about.title.toLocaleUpperCase()]}
          </NavLink>
          <NavLink
            to={PAGE.PROJECT1_PATH}
            className='link'
            onClick={() => setBurgerOpen(false)}
          >
            {[dataPage.project1.title.toLocaleUpperCase()]}
          </NavLink>
          <NavLink
            to={PAGE.PROJECT2_PATH}
            className='link'
            onClick={() => setBurgerOpen(false)}
          >
            {[dataPage.project2.title.toLocaleUpperCase()]}
          </NavLink>
          <NavLink
            to={`${PAGE.PROJECT3_PATH}/${COLLECTION.ALL_COLLECTIONS_CONVERT_NAME}`}
            className='link'
            onClick={() => {
              setBurgerOpen(false);
              setCollectionConvertName(COLLECTION.ALL_COLLECTIONS_CONVERT_NAME);
              setCollectionName(COLLECTION.ALL_COLLECTIONS);
            }}
          >
            {[dataPage.project3.title.toLocaleUpperCase()]}
          </NavLink>
        </li>
      )}
    </BurgerStyle>
  );
};
export default Burger;
