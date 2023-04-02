import { FunctionComponentElement, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './navbar';
import HeaderStyle from '../style/headerStyle';

interface HeaderProps {
  color: string;
}

const Header = ({
  color,
}: HeaderProps): FunctionComponentElement<ReactElement> => {
  return (
    <HeaderStyle color={color}>
      <NavLink to='/about' className='me link'>
        <h1>Aline Gonce</h1>
      </NavLink>
      <Navbar />
    </HeaderStyle>
  );
};
export default Header;
