import { FunctionComponentElement, ReactElement } from 'react';
import CounterStyle from '../../style/project1/counterStyle';
import Computer from '../../assets/pictures/project1/computer.svg';

interface CounterProps {
  userCounter: number;
  computerCounter: number;
}
const Counter = ({
  userCounter,
  computerCounter,
}: CounterProps): FunctionComponentElement<ReactElement> => {
  return (
    <CounterStyle>
      <div className='you'>
        <h4>YOU</h4>
        <div className='points'>
          <p>
            {userCounter} {userCounter > 1 ? 'pts' : 'pt'}
          </p>
        </div>
      </div>
      <div className='verticalLine'></div>
      <div className='computer'>
        <div className='points'>
          <p>
            {computerCounter} {computerCounter > 1 ? 'pts' : 'pt'}
          </p>
        </div>
        <img src={Computer} alt='computer' />
      </div>
    </CounterStyle>
  );
};
export default Counter;
