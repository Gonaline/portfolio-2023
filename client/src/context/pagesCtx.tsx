import { createContext, useState } from 'react';
import page from '../data/pages';
import { ITheme } from '../interfaces/theme';
import IPage from '../interfaces/page';

const pagesCtx = createContext<IPage>({
  title: '',
  setTitle: () => {},
  subtitle: '',
  setSubtitle: () => {},
  description: '',
  setDescription: () => {},
  theme: page.about.theme,
  setTheme: () => {},
});

export default pagesCtx;

export function PagesCtxProvider({ children }: any): JSX.Element {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState('');
  const [theme, setTheme] = useState<ITheme>(page.about.theme);

  return (
    <pagesCtx.Provider
      value={{
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
    </pagesCtx.Provider>
  );
}
