import IProductsByCollection from './productsByCollection';

export default interface IProject3 {
  getProductsByCollection: () => void;
  productsByCollection: IProductsByCollection[];
  setProductsByCollection: (c: any) => void;
  collectionConvertName: string;
  setCollectionConvertName: (c: string) => void;
  isOpen: boolean;
  setIsOpen: (c: boolean) => void;
}
