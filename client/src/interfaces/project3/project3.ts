import ICategoryOfProduct from './categoryOfProduct';
import ICollection from './collection';
import IColor from './color';
import IOption from './option';
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
  productData: IProduct;
  setProductData: (c: any) => void;
  technicalFiles: string[];
  setTechnicalFiles: (c: any) => void;
  colors: IColor;
  setColors: (c: any) => void;
  option: IOption;
  setOption: (c: any) => void;
  categoriesOfProduct: ICategoryOfProduct;
  setcategoriesOfProduct: (c: any) => void;
}
