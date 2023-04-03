import { FunctionComponentElement, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import ReplayStyle from '../../style/project1/replayStyle';

const Replay = (): FunctionComponentElement<ReactElement> => {
  const navigate = useNavigate();

  return (
    <ReplayStyle
      type='button'
      onClick={() => {
        navigate('/');
      }}
    >
      REPLAY
    </ReplayStyle>
  );
};
export default Replay;
