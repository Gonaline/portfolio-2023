import {
  FunctionComponentElement,
  ReactElement,
  useContext,
  useEffect,
} from 'react';
import Left from '../components/left';
import GlobalCtx from '../context/globalCtx';
import pageData from '../data/pages';
import { PAGE } from '../enums/page.enum';
import Project2Style from '../style/modellingGallery/project2Style';

const ModellingGallery = (): FunctionComponentElement<ReactElement> => {
  const { setPageData } = useContext(GlobalCtx);

  const imgList: Array<string> = [
    '1.JPG',
    '2.JPG',
    '3.JPG',
    '4.JPG',
    '5.JPG',
    '6.JPG',
    '7.JPG',
    '8.JPG',
    '9.JPG',
    '10.JPG',
    '11.JPG',
    '12.JPG',
    '13.JPG',
  ];

  useEffect(() => {
    setPageData(pageData[PAGE.PROJECT1]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Left />
      <Project2Style>
        <div className='container'>
          {imgList.map((image) => (
            <div key={image} className='box'>
              <img
                src={require(`../assets/pictures/${PAGE.PROJECT1_PATH}/${image}`)}
                alt={image}
              />
            </div>
          ))}
        </div>
      </Project2Style>
    </>
  );
};
export default ModellingGallery;
