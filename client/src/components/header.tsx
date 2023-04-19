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
      <NavLink to={PAGE.ABOUT_PATH} className='desktop'>
        <h1>Aline Gonce</h1>
      </NavLink>
      <NavLink to={PAGE.ABOUT_PATH} className='mobile'>
        <img src={Logo} alt='logo' />
      </NavLink>
      <Navbar />
      <Burger />
    </HeaderStyle>
  );
};
export default Header;
