export default interface IProductsByCategory {
  product_id: string;
  category_id: number;
  category_name: string;
  product_name: string;
  first_image: string;
  convert_category_name: string;
  convert_product_name: string;
  price: number;
  price_option: number | null;
}
