import {
  FunctionComponentElement,
  ReactElement,
  useContext,
  useEffect,
} from 'react';
import { Outlet } from 'react-router-dom';
import GlobalCtx from '../context/globalCtx';
import pageData from '../data/pages';
import { PAGE } from '../enums/page.enum';
import Left from '../components/left';
import CategoryNav from '../components/stickersShop/categoryNav';
import Project3Style from '../style/stickersShop/stickersShopStyle';

const StickersShop = (): FunctionComponentElement<ReactElement> => {
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
        <Outlet />
      </Project3Style>
    </>
  );
};
export default StickersShop;
