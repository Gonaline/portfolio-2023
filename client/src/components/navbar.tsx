import { FunctionComponentElement, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { PAGE } from '../enums/page.enum';
import { COLLECTION } from '../enums/project3/collection.enum';

const Navbar = (): FunctionComponentElement<ReactElement> => {
  return (
    <nav>
      <li>
        <NavLink to={PAGE.ABOUT_PATH} className='link mainLink'>
          {[PAGE.ABOUT.toLocaleUpperCase()]}
        </NavLink>
      </li>

      <li>
        <div className='link mainLink'>
          {[PAGE.PROJECTS.toLocaleUpperCase()]}
          <ul>
            <NavLink to={PAGE.PROJECT1_PATH} className='link'>
              {[PAGE.PROJECT1.toLocaleUpperCase()]}
            </NavLink>
            <NavLink to={PAGE.PROJECT2_PATH} className='link'>
              {[PAGE.PROJECT2.toLocaleUpperCase()]}
            </NavLink>
            <NavLink
              to={`${PAGE.PROJECT3_PATH}/${COLLECTION.ALL_COLLECTIONS_CONVERT_NAME}`}
              className='link'
            >
              {[PAGE.PROJECT3.toLocaleUpperCase()]}
            </NavLink>
          </ul>
        </div>
      </li>
    </nav>
  );
};
export default Navbar;
