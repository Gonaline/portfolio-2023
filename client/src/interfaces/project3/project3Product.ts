import { IOptionDetail } from './optionDetail';
import IProduct from './product';

export default interface IProject3Product {
  productData: IProduct;
  setProductData: (c: any) => void;

  fixedColor: string | null;
  setFixedColor: (c: string) => void;
  color1Choice: string | null;
  setColor1Choice: (c: string) => void;
  color2Choice: string | null;
  setColor2Choice: (c: string) => void;
  optionChoice: IOptionDetail | null;
  setOptionChoice: (c: any) => void;
  imageProduct: string | null;
  setImageProduct: (c: any) => void;
  isMirror: string;
  setIsMirror: (c: string) => void;

  resetProductData: () => void;
}
