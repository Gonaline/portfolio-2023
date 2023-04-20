import { FunctionComponentElement, ReactElement, useContext } from 'react';
import project3Ctx from '../../context/project3Ctx';
import { ListOfProductsStyle } from '../../style/project3/listOfProductsStyle';
import { useNavigate } from 'react-router-dom';
import { PAGE } from '../../enums/page.enum';
import { FOLDER } from '../../enums/project3/folder.enum';
import { CardStyle } from '../../style/project3/cardStyle';
import project3ProductCtx from '../../context/project3CtxProduct';

const ListOfProducts = (): FunctionComponentElement<ReactElement> => {
  const {
    productsByCollection,
    setProductId,
    productId,
    collectionConvertName,
  } = useContext(project3Ctx);
  const { resetProductData } = useContext(project3ProductCtx);

  const navigate = useNavigate();

  return (
    <ListOfProductsStyle>
      {productsByCollection.map((e) => (
        <CardStyle
          type='button'
          key={e.product_id}
          value={[e.convert_product_name, e.product_id]}
          onClick={async () => {
            await resetProductData();
            await setProductId(e.product_id);
            productId
              ? window.history.replaceState(
                  null,
                  `/${e.convert_product_name}`,
                  `/${PAGE.PROJECT3_PATH}/${collectionConvertName}/${e.convert_product_name}`
                )
              : navigate(e.convert_product_name);
          }}
        >
          <img
            className='image'
            src={require(`../../assets/pictures/${PAGE.PROJECT3}/${
              FOLDER.PRODUCT_IMAGE
            }/${e.first_image ? e.first_image : e.product_id + '.png'}`)}
            alt={e.product_name}
          />
          <div className='productName'>
            <div className='name'>
              <div className='title'>
                <h5>{e.product_name}</h5>
              </div>
            </div>
          </div>
        </CardStyle>
      ))}
    </ListOfProductsStyle>
  );
};
export default ListOfProducts;
