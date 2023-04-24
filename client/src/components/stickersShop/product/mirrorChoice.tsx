import {
  FunctionComponentElement,
  ReactElement,
  useContext,
  useEffect,
} from 'react';
import { ChoiceStyle } from '../../../style/stickersShop/choiceStyle';
import { FOLDER } from '../../../enums/stickersShop/folder.enum';
import { OPTION } from '../../../enums/stickersShop/option.enum';
import stickersShopProductCtx from '../../../context/stickersShopProductCtx';
import { PAGE } from '../../../enums/page.enum';

const MirrorChoice = (): FunctionComponentElement<ReactElement> => {
  const { productData, isMirror, setIsMirror } = useContext(
    stickersShopProductCtx
  );

  useEffect(() => {
    setIsMirror(OPTION.NO_MIRROR);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productData]);

  return (
    <ChoiceStyle>
      <h5>
        <em>{`Orientation : ${
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
            src={require(`../../../assets/pictures/${PAGE.PROJECT3_PATH}/${FOLDER.OPTIONS}/${OPTION.NO_MIRROR}.png`)}
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
            src={require(`../../../assets/pictures/${PAGE.PROJECT3_PATH}/${FOLDER.OPTIONS}/${OPTION.MIRROR}.png`)}
            alt={OPTION.MIRROR}
          />
        </button>
      </div>
    </ChoiceStyle>
  );
};
export default MirrorChoice;
