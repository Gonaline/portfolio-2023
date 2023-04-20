import { FunctionComponentElement, ReactElement, useContext } from 'react';
import project3Ctx from '../../context/project3Ctx';
import { ListOfProductsStyle } from '../../style/project3/listOfProductsStyle';
import { useNavigate } from 'react-router-dom';
import { PAGE } from '../../enums/page.enum';
import { FOLDER } from '../../enums/project3/folder.enum';
import { CardStyle } from '../../style/project3/cardStyle';

const ListOfProducts = (): FunctionComponentElement<ReactElement> => {
  const { productsByCollection, setProductId } = useContext(project3Ctx);

  const navigate = useNavigate();

  return (
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
            src={require(`../../assets/pictures/${PAGE.PROJECT3}/${
              FOLDER.PRODUCT_IMAGE
            }/${e.first_image ? e.first_image : e.product_id + '.png'}`)}
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
  );
};
export default ListOfProducts;
