export interface ICategory {
  id: number;
  category_name: string;
  convert_category_name: string;
  img: string;
}

export interface ICategoriesOfProduct {
  category_name: string;
  main_category: string;
}

export interface ICategoriesOfProductData {
  main_category: string;
  detail?: string[];
}
