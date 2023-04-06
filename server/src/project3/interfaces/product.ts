export default interface IProduct {
  id: string;
  product_name: string;
  text_introduction: string;
  text_size: string;
  mirror: number;
  price: number;
  price_option: number | null;
  fixed_color_id: number | null;
  first_image: string | null;
  productcol: string | null;
  option_id: number | null;
  product_order: number;
}
