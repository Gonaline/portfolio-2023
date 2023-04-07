import { FunctionComponentElement, ReactElement, useContext } from 'react';
import project3Ctx from '../../context/project3Ctx';
import { NavLink } from 'react-router-dom';
import { PAGE } from '../../enums/page.enum';

const ListOfProducts = (): FunctionComponentElement<ReactElement> => {
  const { collectionData, collectionConvertName } = useContext(project3Ctx);
  return (
    <>
      {collectionData.map((e) => (
        <NavLink
          to={`/${PAGE.PROJECT3_PATH}/${collectionConvertName}/${e.product_id}`}
          className='link'
          key={e.product_id}
        >
          <div key={e.first_image}>
            <img
              src={require(`../../assets/pictures/project3/products/${e.first_image}`)}
              alt={e.product_name}
            />
            <p>{e.product_name}</p>
          </div>
        </NavLink>
      ))}
    </>
  );
};
export default ListOfProducts;
