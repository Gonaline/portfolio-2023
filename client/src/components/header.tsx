import { FunctionComponentElement, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import HeaderStyle from '../style/headerStyle.js';
import Navbar from './navbar';

const Header = (): FunctionComponentElement<ReactElement> => {
  return (
    <HeaderStyle>
      <NavLink to='/about' className='me link'>
        <h1>Aline Gonce</h1>
      </NavLink>
      <Navbar />
    </HeaderStyle>
  );
};
export default Header;
