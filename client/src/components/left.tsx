import { FunctionComponentElement, ReactElement, useContext } from 'react';
import LeftStyle from '../style/leftStyle';
import GlobalCtx from '../context/globalCtx';
import Arrow from '../assets/pictures/arrow.svg';

const Left = (): FunctionComponentElement<ReactElement> => {
  const { title, subtitle, description } = useContext(GlobalCtx);
  const scroll = () => {
    window.scrollTo({
      top: window.innerHeight * 0.75,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <LeftStyle>
      <h4 className='subTitle'>{subtitle}</h4>
      <h2>{title}</h2>
      <h5>{description}</h5>
      <button className='arrow' type='button' onClick={scroll}>
        <img src={Arrow} alt='arrow' />
      </button>
    </LeftStyle>
  );
};
export default Left;
