import ICollection from './collection';
import IProduct from './product';
import IProductsByCollection from './productsByCollection';

export default interface IProject3 {
  allCollections: ICollection[];
  setAllCollections: (c: any) => void;
  getProductsByCollection: () => void;
  productsByCollection: IProductsByCollection[];
  setProductsByCollection: (c: any) => void;
  collectionConvertName: string;
  setCollectionConvertName: (c: string) => void;
  collectionName: string;
  setCollectionName: (c: string) => void;
  isOpen: boolean;
  setIsOpen: (c: boolean) => void;
  productId: string;
  setProductId: (c: string) => void;
  productData: IProduct[];
  setProductData: (c: any) => void;
}
