import {
  FunctionComponentElement,
  ReactElement,
  SetStateAction,
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
import Images from '../components/project3/product/images';
import CollectionList from '../components/project3/product/collectionList';
import OptionChoice from '../components/project3/product/optionChoice';
import { OPTION } from '../enums/project3/option.enum';

interface IFileData {
  name: string;
  path: string;
  type: string;
}

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
    imageProduct,
    setImageProduct,
    technicalFiles,
  } = useContext(project3Ctx);

  const [bigImage, setBigImage] = useState<string>('');
  const [filesData, setFilesData] = useState<IFileData[]>([]);

  const updateImage: any = async () => {
    const imageName = `${productId}${
      option !== null && optionChoice ? optionChoice.img_code : ''
    }${
      colors && colors.fixed_color ? '_' + colors.fixed_color : ''
    }_${color1Choice}${color2Choice ? '_' + color2Choice : ''}.png`;
    setImageProduct(imageName);
    setBigImage(imageName);
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

  const updateFilesData: any = async () => {
    const productPath = '../../../assets/pictures/project3/products/';
    const technicalFilePath =
      '../../../assets/pictures/project3/technical-files/';
    const filesArray: SetStateAction<IFileData[]> = [];

    productData.first_image !== null &&
      filesArray.push({
        name: productData.product_id,
        path: productPath + productData.first_image,
        type: 'firstImage',
      });
    technicalFiles.forEach((file) => {
      filesArray.push({
        name: file.replaceAll('.png', ''),
        path: technicalFilePath + file,
        type: 'technicalFile',
      });
    });
    imageProduct !== null &&
      filesArray.push({
        name: productData.product_name,
        path: productPath + imageProduct,
        type: 'productImage',
      });
    setFilesData(filesArray);
  };

  useEffect(() => {
    updateFilesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageProduct, technicalFiles, productData]);

  useEffect(() => {
    updateImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionChoice, color1Choice, color2Choice]);

  useEffect(() => {
    productData.first_image
      ? setBigImage(productData.first_image)
      : setBigImage(imageProduct);
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
                    updateOptions={updateOptions}
                    code={OPTION.COLOR1}
                    colors={colors.first_group}
                  />
                )}
                {colors?.second_group?.length !== 0 && (
                  <ColorChoice
                    updateOptions={updateOptions}
                    code={OPTION.COLOR2}
                    colors={colors.second_group}
                  />
                )}
              </>
            )}
            {option && (
              <OptionChoice
                updateOptions={updateOptions}
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
