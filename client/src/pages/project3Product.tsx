import {
  FunctionComponentElement,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  FirstPartStyle,
  PageProductStyle,
  RightStyle,
} from '../style/project3/productStyle';
import ColorChoice from '../components/project3/product/colorChoice';
import project3Ctx from '../context/project3Ctx';
import { COLOR } from '../enums/project3/color.enum';
import Images from '../components/project3/product/images';
import CollectionList from '../components/project3/product/collectionList';
import OptionChoice from '../components/project3/product/optionChoice';
import { OPTION } from '../enums/project3/option.enum';

const Project3Product = (): FunctionComponentElement<ReactElement> => {
  const {
    productData,
    productId,
    option,
    colors,
    setColor1Choice,
    color1Choice,
    setColor2Choice,
    color2Choice,
    setOptionChoice,
    optionChoice,
  } = useContext(project3Ctx);

  const [bigImage, setBigImage] = useState<string>('');

  const updateImage: any = async () => {
    const imageName = `${productId}${
      option !== null ? optionChoice.img_code : ''
    }${
      colors && colors.fixed_color ? '_' + colors.fixed_color : ''
    }_${color1Choice}${color2Choice ? '_' + color2Choice : ''}.png`;
    console.log(`image ${imageName}`);
    setBigImage(imageName);
  };

  console.log(bigImage);
  const updateData: any = async (value: string, code: string) => {
    if (code === OPTION.OPTION) {
      setOptionChoice(JSON.parse(value));
    } else if (code === COLOR.CHOICE1) {
      setColor1Choice(value);
    } else if (code === COLOR.CHOICE2) {
      setColor2Choice(value);
    }
  };

  useEffect(() => {
    updateImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionChoice, color1Choice, color2Choice]);

  useEffect(() => {
    setBigImage(productData.first_image);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productData]);

  return (
    <PageProductStyle>
      {productData && (
        <FirstPartStyle>
          <Images bigImage={bigImage} />

          <RightStyle>
            <h4>{productData.product_name}</h4>
            <CollectionList />
            <h5 className='introduction'>{productData.text_introduction}</h5>

            {colors && (
              <>
                {colors.first_group && (
                  <ColorChoice
                    updateData={updateData}
                    code={COLOR.CHOICE1}
                    colors={colors.first_group}
                  />
                )}
                {colors?.second_group?.length !== 0 && (
                  <ColorChoice
                    updateData={updateData}
                    code={COLOR.CHOICE2}
                    colors={colors.second_group}
                  />
                )}
              </>
            )}
            {option && (
              <OptionChoice
                updateData={updateData}
                code={OPTION.OPTION}
                option={option}
              />
            )}
            <em className='size'>{`Format: ${productData.text_size}`}</em>
            {colors && (
              <em>
                {colors.second_group &&
                  `Choix des coloris: ${colors.fixed_color
                    ?.replaceAll('_', ', ')
                    .replaceAll('-', ' ')}`}
              </em>
            )}

            <h5 className='price'>
              {option // à compléter
                ? `Prix: ${productData.price} €`
                : `Prix: ${productData.price} €`}
            </h5>
          </RightStyle>
        </FirstPartStyle>
      )}
    </PageProductStyle>
  );
};
export default Project3Product;
