import { FunctionComponentElement, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (): FunctionComponentElement<ReactElement> => {
  return (
    <nav>
      <li>
        <NavLink to='/about' className='link mainLink'>
          ABOUT
        </NavLink>
      </li>

      <li>
        <div className='link mainLink'>
          PROJECTS
          <ul>
            <NavLink to='/rock-paper-or-scissors' className='link'>
              PROJECT#1
            </NavLink>
            <NavLink to='/modeling-gallery' className='link'>
              PROJECT#2
            </NavLink>
            <NavLink to='/stickers-shop' className='link'>
              PROJECT#3
            </NavLink>
          </ul>
        </div>
      </li>
    </nav>
  );
};
export default Navbar;
