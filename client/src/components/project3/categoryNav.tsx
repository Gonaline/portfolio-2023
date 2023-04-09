import {
  FunctionComponentElement,
  ReactElement,
  useEffect,
  useState,
  useContext,
} from 'react';
import {
  CollectionButtonStyle,
  CategoryNavStyle,
  ChoiceButtonStyle,
  SubmenuStyle,
} from '../../style/project3/categoryNavStyle';
import { Project3Service } from '../../services/project3';
import { useNavigate } from 'react-router-dom';
import ICategory from '../../interfaces/project3/category';
import project3Ctx from '../../context/project3Ctx';

const CategoryNav = (): FunctionComponentElement<ReactElement> => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const { isOpen, setIsOpen, setCollectionConvertName } =
    useContext(project3Ctx);
  const navigate = useNavigate();

  const getData: any = async () => {
    const { data } = await Project3Service.getAllCategories();
    setCategories(data);
  };

  const updateCollection: any = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.currentTarget;
    setCollectionConvertName(value);
    navigate(value);
  };

  useEffect(() => {
    void getData();
  }, []);

  return (
    <CategoryNavStyle>
      <div className={`menu ${isOpen && 'isOpen'}`}>
        <CollectionButtonStyle
          type='button'
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <h4>COLLECTIONS</h4>
        </CollectionButtonStyle>
        {isOpen && (
          <SubmenuStyle>
            {categories.map((e) => (
              <ChoiceButtonStyle
                key={e.id.toString()}
                type='button'
                value={e.convert_category_name}
                onClick={updateCollection}
              >
                <img
                  src={require(`../../assets/pictures/project3/categories/${e.img}`)}
                  alt={e.category_name}
                />
                <p>{e.category_name}</p>
              </ChoiceButtonStyle>
            ))}
          </SubmenuStyle>
        )}
      </div>
    </CategoryNavStyle>
  );
};
export default CategoryNav;
