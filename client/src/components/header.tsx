import { FunctionComponentElement, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './navbar';
import HeaderStyle from '../style/headerStyle';
import { PAGE } from '../enums/page.enum';
import Logo from '../assets/pictures/logo.svg';
import Burger from './burger';

const Header = (): FunctionComponentElement<ReactElement> => {
  return (
    <HeaderStyle>
      <NavLink to={PAGE.ABOUT_PATH} className='me'>
        <div className='logo'>
          <img src={Logo} alt='logo' />
        </div>
      </NavLink>
      <Navbar />
      <Burger />
    </HeaderStyle>
  );
};
export default Header;
