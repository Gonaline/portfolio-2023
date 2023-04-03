import { ITheme } from './theme';

export default interface IPage {
  title: string;
  setTitle: (c: string) => void;
  subtitle: string;
  setSubtitle: (c: string) => void;
  description: string;
  setDescription: (c: string) => void;
  theme: ITheme;
  setTheme: (c: any) => void;
}
