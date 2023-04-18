import {
  FunctionComponentElement,
  ReactElement,
  useContext,
  useState,
} from 'react';
import { NavLink } from 'react-router-dom';
import { PAGE } from '../enums/page.enum';
import { COLLECTION } from '../enums/project3/collection.enum';
import project3Ctx from '../context/project3Ctx';
import { BurgerStyle } from '../style/burgerStyle';

const Burger = (): FunctionComponentElement<ReactElement> => {
  const { setCollectionConvertName, setCollectionName } =
    useContext(project3Ctx);
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
            {[PAGE.ABOUT.toLocaleUpperCase()]}
          </NavLink>
          <NavLink
            to={PAGE.PROJECT1_PATH}
            className='link'
            onClick={() => setBurgerOpen(false)}
          >
            {[PAGE.PROJECT1.toLocaleUpperCase()]}
          </NavLink>
          <NavLink
            to={PAGE.PROJECT2_PATH}
            className='link'
            onClick={() => setBurgerOpen(false)}
          >
            {[PAGE.PROJECT2.toLocaleUpperCase()]}
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
            {[PAGE.PROJECT3.toLocaleUpperCase()]}
          </NavLink>
        </li>
      )}
    </BurgerStyle>
  );
};
export default Burger;
