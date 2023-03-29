import { FunctionComponentElement, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

const Header = (): FunctionComponentElement<ReactElement> => {
  return (
    <>
      <div className='me'>
        <NavLink to='/about'>
          <h1>Aline Gonce</h1>
        </NavLink>
      </div>
      <nav>
        <NavLink to='/about'>ABOUT</NavLink>
        <NavLink to='/projects'>
          PROJECTS
          <ul>
            <NavLink to='/rock-paper-or-scissors'>PROJECT #1</NavLink>
            <NavLink to='/modeling-gallery'>PROJECT #2</NavLink>
            <NavLink to='/stickers-shop'>PROJECT #3</NavLink>
          </ul>
        </NavLink>
      </nav>
    </>
  );
};
export default Header;
