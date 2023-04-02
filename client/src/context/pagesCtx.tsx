import { createContext, useState } from 'react';
import IPage from '../interfaces/pages';
import page from '../data/page';
import IDataPage from '../interfaces/dataPage';

const pagesCtx = createContext<IPage>({
  dataPage: page.about,
  setDataPage: () => {},
});

export default pagesCtx;

export function PagesCtxProvider({ children }: any): JSX.Element {
  const [dataPage, setDataPage] = useState<IDataPage>(page.about);

  return (
    <pagesCtx.Provider
      value={{
        dataPage,
        setDataPage,
      }}
    >
      {children}
    </pagesCtx.Provider>
  );
}
