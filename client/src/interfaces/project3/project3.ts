import IProductsByCollection from './productsByCollection';

export default interface IProject3 {
  getCollectionData: () => void;
  collectionData: IProductsByCollection[];
  setCollectionData: (c: any) => void;
}
