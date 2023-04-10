import { FunctionComponentElement, ReactElement, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import project3Ctx from '../context/project3Ctx';
import {
  CardStyle,
  ListOfProductsStyle,
} from '../style/project3/listOfProductsStyle';
import { CollectionTitleStyle } from '../style/project3/collectionTitleStyle';

const Project3Category = (): FunctionComponentElement<ReactElement> => {
  const { productsByCollection, collectionName, setProductId } =
    useContext(project3Ctx);
  const navigate = useNavigate();

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
            value={[e.convert_product_name, e.product_id]}
            onClick={() => {
              setProductId(e.product_id);
              navigate(e.convert_product_name);
            }}
          >
            <img
              src={require(`../assets/pictures/project3/products/${e.first_image}`)}
              alt={e.product_name}
            />
            <div className='productName'>
              <div className='name'>
                <h5>{e.product_name}</h5>
              </div>

              <div className='add'>
                <p>+</p>
              </div>
            </div>
          </CardStyle>
        ))}
      </ListOfProductsStyle>
    </>
  );
};
export default Project3Category;
