import { FunctionComponentElement, ReactElement, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import project3Ctx from '../context/project3Ctx';
import {
  CardStyle,
  ListOfProductsStyle,
} from '../style/project3/listOfProductsStyle';
import { PAGE } from '../enums/page.enum';

const Project3Category = (): FunctionComponentElement<ReactElement> => {
  const { collectionConvertName } = useContext(project3Ctx);
  const { productsByCollection } = useContext(project3Ctx);
  const navigate = useNavigate();

  const updateData: any = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.currentTarget;
    navigate(`${PAGE.PROJECT3_PATH}/${value}`);
  };

  return (
    <>
      <h4>{collectionConvertName}</h4>
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
