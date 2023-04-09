import { FunctionComponentElement, ReactElement, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import project3Ctx from '../context/project3Ctx';
import {
  CardStyle,
  ListOfProductsStyle,
} from '../style/project3/listOfProductsStyle';
import { PAGE } from '../enums/page.enum';
import { CollectionTitleStyle } from '../style/project3/collectionTitleStyle';

const Project3Category = (): FunctionComponentElement<ReactElement> => {
  const { productsByCollection, collectionName } = useContext(project3Ctx);
  const navigate = useNavigate();

  const updateData: any = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.currentTarget;
    navigate(`${PAGE.PROJECT3_PATH}/${value}`);
  };

  window.scrollTo(0, 0);

  return (
    <>
      <CollectionTitleStyle>
        <h4>{collectionName}</h4>
      </CollectionTitleStyle>
      <ListOfProductsStyle>
        {productsByCollection.map((e) => (
          <CardStyle
            type='button'
            key={e.product_id}
            value={e.convert_product_name}
            onClick={() => {
              updateData();
            }}
          >
            <img
              src={require(`../assets/pictures/project3/products/${e.first_image}`)}
              alt={e.product_name}
            />
            <div className='productName'>
              <p>{e.product_name}</p>
            </div>
          </CardStyle>
        ))}
      </ListOfProductsStyle>
    </>
  );
};
export default Project3Category;
