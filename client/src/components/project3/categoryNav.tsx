import {
  FunctionComponentElement,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import {
  ButtonStyle,
  CategoryNavStyle,
  CategoryStyle,
  SubmenuStyle,
} from '../../style/project3/categoryNavStyle';
import { Project3Service } from '../../services/project3';
import { NavLink } from 'react-router-dom';
import ICategory from '../../interfaces/project3/category';

const CategoryNav = (): FunctionComponentElement<ReactElement> => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const getData: any = async () => {
    const { data } = await Project3Service.getAllCategories();
    setCategories(data);
  };

  useEffect(() => {
    void getData();
  }, []);

  return (
    <CategoryNavStyle>
      <div className={`menu ${isOpen && 'isOpen'}`}>
        <ButtonStyle
          type='button'
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <h4>COLLECTIONS</h4>
        </ButtonStyle>
        {isOpen && (
          <SubmenuStyle className='submenu'>
            {categories.map((e) => (
              <NavLink
                to={`/project3/${e.convert_category_name}`}
                className='link'
                id={e.id.toString()}
              >
                <CategoryStyle>
                  <img
                    src={require(`../../assets/pictures/project3/categories/${e.img}`)}
                    alt={e.category_name}
                  />
                  <p>{e.category_name}</p>
                </CategoryStyle>
              </NavLink>
            ))}
          </SubmenuStyle>
        )}
      </div>
    </CategoryNavStyle>
  );
};
export default CategoryNav;
