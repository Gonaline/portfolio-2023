import {
  FunctionComponentElement,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import { ProductImgStyle } from '../../../style/project3/productStyle';
import IFile from '../../../interfaces/project3/file';
import { PAGE } from '../../../enums/page.enum';
import { FILE } from '../../../enums/project3/file.enum';

interface ImagesProps {
  filesData: IFile[];
  isMirror: string;
}

const Images = ({
  filesData,
  isMirror,
}: ImagesProps): FunctionComponentElement<ReactElement> => {
  const [activePicture, setActivePicture] = useState<string>('');

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
