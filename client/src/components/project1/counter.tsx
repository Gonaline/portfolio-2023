import { FunctionComponentElement, ReactElement } from 'react';
import CounterStyle from '../../style/project1/counterStyle';

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
      <div className='computer'>
        <div className='points'>
          <p>
            {computerCounter} {computerCounter > 1 ? 'pts' : 'pt'}
          </p>
        </div>
        <h4>COMPUTER</h4>
      </div>
    </CounterStyle>
  );
};
export default Counter;
