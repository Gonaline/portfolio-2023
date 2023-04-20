import {
  FunctionComponentElement,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';
import IFile from '../../../interfaces/project3/file';
import { PAGE } from '../../../enums/page.enum';
import { FILE } from '../../../enums/project3/file.enum';
import project3ProductCtx from '../../../context/project3CtxProduct';
import { FOLDER } from '../../../enums/project3/folder.enum';
import { ProductImgStyle } from '../../../style/project3/productImgStyle';

const Images = (): FunctionComponentElement<ReactElement> => {
  const { isMirror, productData, imageProduct } =
    useContext(project3ProductCtx);

  const [activePicture, setActivePicture] = useState<string>('');
  const [filesData, setFilesData] = useState<IFile[]>([]);

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

  useEffect(() => {
    updateFilesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageProduct]);

  useEffect(() => {
    const defaultImageData = filesData.filter(
      (e) => e.type === FILE.PRODUCT_IMAGE
    );
    if (defaultImageData.length) {
      setActivePicture(defaultImageData[0].name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filesData]);

  return (
    <ProductImgStyle>
      {filesData.length !== 0 && (
        <>
          <div className='file'>
            {filesData.map((file) => (
              <>
                <button
                  className={
                    activePicture === file.name ? 'selected' : 'notSelected'
                  }
                  type='button'
                  key={file.name}
                  value={file.name}
                  onClick={() => {
                    setActivePicture(file.name);
                  }}
                >
                  {file.folder && file.name && (
                    <img
                      src={require(`../../../assets/pictures/${PAGE.PROJECT3}/${file.folder}/${file.name}`)}
                      alt={file.name}
                    />
                  )}
                </button>
              </>
            ))}
          </div>
        </>
      )}
      <div className='bigImage'>
        {activePicture &&
          filesData
            .filter((e) => e.name === activePicture)
            .map((file) => (
              <img
                className={`${file.type !== FILE.TECHNICAL_FILE && isMirror}`}
                src={require(`../../../assets/pictures/${PAGE.PROJECT3}/${file.folder}/${file.name}`)}
                alt={file.name}
              />
            ))}
      </div>
    </ProductImgStyle>
  );
};
export default Images;
