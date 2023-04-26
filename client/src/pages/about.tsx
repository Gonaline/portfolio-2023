import {
  FunctionComponentElement,
  ReactElement,
  useContext,
  useEffect,
} from 'react';
import pageData from '../data/pages';

import GlobalCtx from '../context/globalCtx';
import { PAGE } from '../enums/page.enum';
import Left from '../components/left';
import Draw from '../components/about/draw';

const About = (): FunctionComponentElement<ReactElement> => {
  const { setPageData } = useContext(GlobalCtx);

  useEffect(() => {
    setPageData(pageData[PAGE.ABOUT]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Left />
      {window.innerWidth > 1000 && <Draw />}
    </>
  );
};
export default About;
