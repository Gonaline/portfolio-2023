import {
  FunctionComponentElement,
  ReactElement,
  useEffect,
  useContext,
} from 'react';
import { CategoryNavStyle } from '../../style/project3/categoryNavStyle';
import { Project3Service } from '../../services/project3';
import { useNavigate } from 'react-router-dom';
import project3Ctx from '../../context/project3Ctx';
import { CollectionButtonStyle } from '../../style/project3/collectionButtonStyle';
import { SubmenuStyle } from '../../style/project3/submenuStyle';
import { ChoiceButtonStyle } from '../../style/project3/choiceButtonStyle';

const CategoryNav = (): FunctionComponentElement<ReactElement> => {
  const {
    isOpen,
    setIsOpen,
    setCollectionConvertName,
    allCollections,
    setAllCollections,
  } = useContext(project3Ctx);
  const navigate = useNavigate();

  const getData: any = async () => {
    const { data } = await Project3Service.getAllCategories();
    setAllCollections(data);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <div className='onOff'>
            {isOpen ? <p className='off'>-</p> : <p className='on'>+</p>}
          </div>
          <h4>COLLECTIONS</h4>
        </CollectionButtonStyle>
        {isOpen && (
          <SubmenuStyle>
            {allCollections.map((e) => (
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
