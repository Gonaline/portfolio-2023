import { FunctionComponentElement, ReactElement, useContext } from 'react';
import LeftStyle from '../style/leftStyle';
import GlobalCtx from '../context/globalCtx';

const Left = (): FunctionComponentElement<ReactElement> => {
  const { title, subtitle, description } = useContext(GlobalCtx);

  return (
    <LeftStyle>
      <div>
        <h4 className='subTitle'>{subtitle}</h4>
        <h2>{title}</h2>
        <h5>{description}</h5>
      </div>
    </LeftStyle>
  );
};
export default Left;
