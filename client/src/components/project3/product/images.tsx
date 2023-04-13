import { FunctionComponentElement, ReactElement, useContext } from 'react';
import { ProductImgStyle } from '../../../style/project3/productStyle';
import project3Ctx from '../../../context/project3Ctx';

interface ImagesProps {
  bigImage: string;
}

const Images = ({
  bigImage,
}: ImagesProps): FunctionComponentElement<ReactElement> => {
  const { technicalFiles } = useContext(project3Ctx);

  return (
    <ProductImgStyle>
      <div className='technicalSheet'>
        {technicalFiles.length !== 0 &&
          technicalFiles.map((file) => (
            <button
              type='button'
              key={file}
              value={file}
              onClick={() => {
                console.log('coucou');
              }}
            >
              <img
                src={require(`../../../assets/pictures/project3/technical-files/${file}`)}
                alt={file}
              />
            </button>
          ))}
      </div>
      <div className='bigImage'>
        {bigImage && (
          <img
            src={require(`../../../assets/pictures/project3/products/${bigImage}`)}
            alt={bigImage}
          />
        )}
      </div>
    </ProductImgStyle>
  );
};
export default Images;
