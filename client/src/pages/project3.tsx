import {
  FunctionComponentElement,
  ReactElement,
  useContext,
  useEffect,
} from 'react';
import { Outlet } from 'react-router-dom';
import GlobalCtx from '../context/globalCtx';
import project3Ctx from '../context/project3Ctx';
import pageData from '../data/pages';
import { PAGE } from '../enums/page.enum';
import { COLLECTION } from '../enums/project3/collection.enum';
import Left from '../components/left';
import CategoryNav from '../components/project3/categoryNav';
import Project3Style from '../style/project3/project3Style';

const Project3 = (): FunctionComponentElement<ReactElement> => {
  const { setPageData } = useContext(GlobalCtx);
  const { setCollectionConvertName } = useContext(project3Ctx);

  useEffect(() => {
    setPageData(pageData[PAGE.PROJECT3]);
    setCollectionConvertName(COLLECTION.ALL_COLLECTIONS_CONVERT_NAME);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Left />
      <Project3Style>
        <CategoryNav />
        <Outlet />
      </Project3Style>
    </>
  );
};
export default Project3;
