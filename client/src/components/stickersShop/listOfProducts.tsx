import { FunctionComponentElement, ReactElement, useContext } from 'react';
import stickersShopCtx from '../../context/stickersShopCtx';
import { ListOfProductsStyle } from '../../style/stickersShop/listOfProductsStyle';
import { useNavigate } from 'react-router-dom';
import { FOLDER } from '../../enums/stickersShop/folder.enum';
import { CardStyle } from '../../style/stickersShop/cardStyle';
import stickersShopProductCtx from '../../context/stickersShopProductCtx';
import { PAGE } from '../../enums/page.enum';

const ListOfProducts = (): FunctionComponentElement<ReactElement> => {
  const {
    productsByCollection,
    setProductId,
    productId,
    collectionConvertName,
  } = useContext(stickersShopCtx);
  const { resetProductData } = useContext(stickersShopProductCtx);

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
            window.innerWidth > 1000
              ? window.scrollTo({
                  top: 0 - window.innerHeight,
                  left: 0,
                  behavior: 'smooth',
                })
              : window.scrollTo({
                  top: window.innerHeight * 0.75,
                  left: 0,
                  behavior: 'smooth',
                });
          }}
        >
          <img
            className='image'
            src={require(`../../assets/pictures/${PAGE.PROJECT3_PATH}/${
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
