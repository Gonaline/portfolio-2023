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
      <div className='subTitle'>
        <h4>{subtitle}</h4>
      </div>
      <div className='title'>
        <h2>{title}</h2>
      </div>
      <div className='description'>
        {description.map((e) => (
          <>
            <h5>
              {e
                .replaceAll('&#039', "'")
                .replaceAll('&apos;', '.')
                .replaceAll('&#44;', ',')}
            </h5>
          </>
        ))}
      </div>
      <button className='arrow' type='button' onClick={scroll}>
        <img src={Arrow} alt='arrow' />
      </button>
    </LeftStyle>
  );
};
export default Left;
