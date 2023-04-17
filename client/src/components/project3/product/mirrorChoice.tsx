import { FunctionComponentElement, ReactElement } from 'react';
import { ChoiceStyle } from '../../../style/project3/productStyle';
import { FOLDER } from '../../../enums/project3/folder.enum';
import { PAGE } from '../../../enums/page.enum';
import { OPTION } from '../../../enums/project3/option.enum';

interface MirrorChoiceProps {
  setIsMirror: (c: string) => void;
  isMirror: string;
}

const MirrorChoice = ({
  setIsMirror,
  isMirror,
}: MirrorChoiceProps): FunctionComponentElement<ReactElement> => {
  return (
    <ChoiceStyle>
      <h5>
        <em>{`Orientation ? : ${
          isMirror === OPTION.MIRROR ? 'inversée' : 'non inversée'
        }`}</em>
      </h5>

      <div className='choice'>
        <button
          className={`${isMirror === OPTION.NO_MIRROR ? 'selected' : ''} `}
          type='button'
          value={OPTION.NO_MIRROR}
          key={OPTION.NO_MIRROR}
          onClick={() => {
            setIsMirror(OPTION.NO_MIRROR);
          }}
        >
          <img
            src={require(`../../../assets/pictures/${PAGE.PROJECT3}/${FOLDER.OPTIONS}/${OPTION.NO_MIRROR}.png`)}
            alt={OPTION.NO_MIRROR}
          />
        </button>
        <button
          className={`${isMirror === OPTION.MIRROR ? 'selected' : ''} `}
          type='button'
          value={OPTION.MIRROR}
          key={OPTION.MIRROR}
          onClick={() => {
            setIsMirror(OPTION.MIRROR);
          }}
        >
          <img
            src={require(`../../../assets/pictures/${PAGE.PROJECT3}/${FOLDER.OPTIONS}/${OPTION.MIRROR}.png`)}
            alt={OPTION.MIRROR}
          />
        </button>
      </div>
    </ChoiceStyle>
  );
};
export default MirrorChoice;
