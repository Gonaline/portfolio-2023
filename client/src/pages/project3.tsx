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
import CategoryNav from '../components/project3/categoryNav';
import Project3Style from '../style/project3/project3Style';

const Project3 = (): FunctionComponentElement<ReactElement> => {
  const { setPageData } = useContext(GlobalCtx);

  useEffect(() => {
    setPageData(pageData[PAGE.PROJECT3]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Left />
      <Project3Style>
        <CategoryNav />
      </Project3Style>
    </>
  );
};
export default Project3;
