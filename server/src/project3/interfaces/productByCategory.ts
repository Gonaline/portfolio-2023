export default interface IProductByCategory {
  product_id: string;
  category_id: number;
  category_name: string;
  product_name: string;
  first_image: string | null;
  convert_category_name: string;
  convert_product_name: string;
}
