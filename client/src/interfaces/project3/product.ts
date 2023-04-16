import ICategoryOfProduct from './categoryOfProduct';
import IColor from './color';
import IOption from './option';

export default interface IProduct {
  product_id: string;
  product_name: string;
  text_introduction: string;
  text_size: string;
  mirror: number;
  price: number;
  first_image: string;
  technicalFiles: string[];
  colors: IColor;
  option: IOption | null;
  collections: ICategoryOfProduct;
}
