import { FunctionComponentElement, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import ReplayStyle from '../../style/project1/replayStyle';

interface ResultProps {
  color: string | undefined;
}
const Replay = ({
  color,
}: ResultProps): FunctionComponentElement<ReactElement> => {
  const navigate = useNavigate();

  return (
    <ReplayStyle
      type='button'
      color={color}
      onClick={() => {
        navigate('/');
      }}
    >
      REPLAY
    </ReplayStyle>
  );
};
export default Replay;
