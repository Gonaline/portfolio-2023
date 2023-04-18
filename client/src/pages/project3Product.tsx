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
import project3ProductCtx from '../context/project3CtxProduct';
import project3Ctx from '../context/project3Ctx';
import Images from '../components/project3/product/images';
import CollectionList from '../components/project3/product/collectionList';
import ColorChoice from '../components/project3/product/colorChoice';
import { OPTION } from '../enums/project3/option.enum';
import OptionChoice from '../components/project3/product/optionChoice';
import { FILE } from '../enums/project3/file.enum';
import IFile from '../interfaces/project3/file';
import { FOLDER } from '../enums/project3/folder.enum';
import MirrorChoice from '../components/project3/product/mirrorChoice';

const Project3Product = (): FunctionComponentElement<ReactElement> => {
  const {
    productData,
    optionChoice,
    setOptionChoice,
    fixedColor,
    setFixedColor,
    color1Choice,
    setColor1Choice,
    color2Choice,
    setColor2Choice,
    imageProduct,
    setImageProduct,
  } = useContext(project3ProductCtx);
  const { productId } = useContext(project3Ctx);

  const [filesData, setFilesData] = useState<IFile[]>([]);
  const [isMirror, setIsMirror] = useState<string>('');

  const updateFilesData: any = async () => {
    const filesArray: IFile[] = [];

    productData.first_image !== null &&
      filesArray.push({
        name: productData.first_image,
        type: FILE.FIRST_IMAGE,
        folder: FOLDER.FIRST_IMAGE,
      });

    productData.technicalFiles.forEach((file) => {
      filesArray.push({
        name: file,
        type: FILE.TECHNICAL_FILE,
        folder: FOLDER.TECHNICAL_FILE,
      });
    });

    imageProduct &&
      filesArray.push({
        name: imageProduct,
        type: FILE.PRODUCT_IMAGE,
        folder: FOLDER.PRODUCT_IMAGE,
      });
    setFilesData(filesArray);
  };

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
    updateFilesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageProduct]);

  useEffect(() => {
    getDefaultData();
    setIsMirror(OPTION.NO_MIRROR);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productData]);

  return (
    <PageProductStyle>
      {productData && (
        <FirstPartStyle>
          {imageProduct && <Images filesData={filesData} isMirror={isMirror} />}

          <RightStyle>
            <div className='titleAndPrice'>
              <div className='title'>
                <h4>{productData.product_name}</h4>
              </div>

              <div className='price'>
                <h5>
                  {productData.option !== null && optionChoice
                    ? `Prix: ${productData.price + optionChoice.price} €`
                    : `Prix: ${productData.price} €`}
                </h5>
              </div>
            </div>
            <CollectionList />
            <h5 className='introduction'>{productData.text_introduction}</h5>
            <h5 className='size'>
              <em>{`Format: ${productData.text_size}`}</em>
            </h5>
            <>
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
              {productData.mirror === 1 && (
                <MirrorChoice setIsMirror={setIsMirror} isMirror={isMirror} />
              )}
            </>
          </RightStyle>
        </FirstPartStyle>
      )}
    </PageProductStyle>
  );
};
export default Project3Product;
