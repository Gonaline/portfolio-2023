import { createContext, useMemo, useState } from 'react';
import page from '../data/pages';
import { ITheme } from '../interfaces/theme';
import IGlobalCtx from '../interfaces/globalCtx';

const GlobalCtx = createContext<IGlobalCtx>({
  pageData: page.about,
  setPageData: () => {},
  title: page.about.title,
  setTitle: () => {},
  subtitle: page.about.subtitle,
  setSubtitle: () => {},
  description: page.about.description,
  setDescription: () => {},
  theme: page.about.theme,
  setTheme: () => {},
});

export default GlobalCtx;

export function GlobalCtxProvider({ children }: any): JSX.Element {
  const [pageData, setPageData] = useState<any>(page.about);
  const [title, setTitle] = useState<string>(page.about.title);
  const [subtitle, setSubtitle] = useState<string>(page.about.subtitle);
  const [description, setDescription] = useState<string>(
    page.about.description
  );
  const [theme, setTheme] = useState<ITheme>(page.about.theme);

  useMemo(() => {
    setTheme(pageData.theme);
    setTitle(pageData.title);
    setSubtitle(pageData.subtitle);
    setDescription(pageData.description);
  }, [pageData]);

  return (
    <GlobalCtx.Provider
      value={{
        pageData,
        setPageData,
        title,
        setTitle,
        subtitle,
        setSubtitle,
        description,
        setDescription,
        theme,
        setTheme,
      }}
    >
      {children}
    </GlobalCtx.Provider>
  );
}
