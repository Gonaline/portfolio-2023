import { FunctionComponentElement, ReactElement, useContext } from 'react';
import LeftStyle from '../style/leftStyle';
import pagesCtx from '../context/pagesCtx';

const Left = (): FunctionComponentElement<ReactElement> => {
  const { title, subtitle, description } = useContext(pagesCtx);

  return (
    <LeftStyle>
      <div>
        <h4 className='subTitle'>{subtitle}</h4>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </LeftStyle>
  );
};
export default Left;
