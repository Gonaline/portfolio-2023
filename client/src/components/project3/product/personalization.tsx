import {
  FunctionComponentElement,
  ReactElement,
  useContext,
  useEffect,
} from 'react';
import project3Ctx from '../../../context/project3Ctx';
import project3ProductCtx from '../../../context/project3CtxProduct';
import { OPTION } from '../../../enums/project3/option.enum';
import MirrorChoice from './mirrorChoice';
import OptionChoice from './optionChoice';
import ColorChoice from './colorChoice';
import { PersonalizationStyle } from '../../../style/project3/personalizationStyle';

const Personalization = (): FunctionComponentElement<ReactElement> => {
  const {
    productData,
    setImageProduct,
    setFixedColor,
    fixedColor,
    setOptionChoice,
    optionChoice,
    setColor1Choice,
    color1Choice,
    setColor2Choice,
    color2Choice,
  } = useContext(project3ProductCtx);
  const { productId } = useContext(project3Ctx);

  const getDefaultData: any = async () => {
    productData.option !== null &&
      (await setOptionChoice(productData.option.detail[0]));
    productData.colors.fixed_color &&
      (await setFixedColor(productData.colors.fixed_color));
    productData.colors.first_group[0] &&
      (await setColor1Choice(productData.colors.first_group[0]));
    productData.colors.second_group &&
      (await setColor2Choice(productData.colors.second_group[0]));
  };

  const updateImage: any = () => {
    const imageName = `${productId}${
      optionChoice ? optionChoice.img_code : ''
    }${fixedColor ? '_' + fixedColor : ''}_${color1Choice}${
      color2Choice ? '_' + color2Choice : ''
    }${optionChoice && optionChoice.color ? '_' + optionChoice.color : ''}.png`;
    if (imageName.includes('undefined') || imageName.includes('null')) {
      return undefined;
    } else {
      return imageName;
    }
  };

  const updateOptions: any = async (value: string, code: string) => {
    if (code === OPTION.OPTION) {
      setOptionChoice(JSON.parse(value));
    } else if (code === OPTION.COLOR1) {
      setColor1Choice(value);
    } else if (code === OPTION.COLOR2) {
      setColor2Choice(value);
    }
  };

  useEffect(() => {
    setImageProduct(updateImage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color1Choice, color2Choice, optionChoice]);

  useEffect(() => {
    getDefaultData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productData]);

  return (
    <PersonalizationStyle>
      <h5 className='custom'>Personnalisez-le !</h5>
      {productData.colors.first_group && (
        <ColorChoice
          updateOptions={updateOptions}
          code={OPTION.COLOR1}
          colors={productData.colors.first_group}
        />
      )}
      {productData.colors.second_group && (
        <ColorChoice
          updateOptions={updateOptions}
          code={OPTION.COLOR2}
          colors={productData.colors.second_group}
        />
      )}
      {productData.option && (
        <OptionChoice
          updateOptions={updateOptions}
          code={OPTION.OPTION}
          option={productData.option}
        />
      )}
      {productData.mirror === 1 && <MirrorChoice />}
    </PersonalizationStyle>
  );
};
export default Personalization;
