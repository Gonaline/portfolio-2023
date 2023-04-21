import { useContext, useEffect } from 'react';
import pageData from '../data/pages';

import GlobalCtx from '../context/globalCtx';
import { PAGE } from '../enums/page.enum';
import Left from '../components/left';

const About = (): any => {
  const { setPageData } = useContext(GlobalCtx);

  useEffect(() => {
    setPageData(pageData[PAGE.ABOUT]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Left />
    </>
  );
};
export default About;
