import { FunctionComponentElement, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './navbar';
import HeaderStyle from '../style/headerStyle';
import { PAGE } from '../enums/page.enum';

const Header = (): FunctionComponentElement<ReactElement> => {
  return (
    <HeaderStyle>
      <NavLink to={PAGE.ABOUT_PATH} className='me link'>
        <h1>Aline Gonce</h1>
      </NavLink>
      <Navbar />
    </HeaderStyle>
  );
};
export default Header;
