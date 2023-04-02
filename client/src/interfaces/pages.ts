import IDataPage from './dataPage';

export default interface IPage {
  dataPage: IDataPage;
  setDataPage: (c: any) => void;
}
