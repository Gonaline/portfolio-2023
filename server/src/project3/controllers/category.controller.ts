import { Request, Response } from 'express';
import CategoryManager from '../models/category.manager';
import { convertText } from '../../utils/convertText';
import { ICategoriesOfProductData, ICategory } from '../interfaces/category';
import IProductByCategory from '../interfaces/productByCategory';

class CategoryController {
  constructor(private categoryManager = new CategoryManager()) {}

  public findAllCategoriesWithConvertName = async () => {
    return await this.categoryManager.findAll().then((result) => {
      result.forEach((e: ICategory) => {
        e.convert_category_name = convertText(e.category_name);
      });
      return result;
    });
  };

  public getCategories = async (_req: Request, res: Response) => {
    return await this.findAllCategoriesWithConvertName()
      .then((result) => {
        if (!result) {
          res.sendStatus(404);
        } else {
          res.status(200).json(result);
        }
      })
      .catch((err: any) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  public getProductsByCategory = async (req: Request, res: Response) => {
    const convertName = req.params.convertName;
    const categories = await this.findAllCategoriesWithConvertName();

    if (!categories || categories.length === 0) {
      return [];
    } else {
      const [category] = categories.filter(
        (e) => e.convert_category_name === convertName
      );
      let id: string;
      if (category === undefined) {
        id = '';
      } else {
        id = category.id.toString();
      }
      return await this.categoryManager
        .findProductsByCategory(id, convertName)
        .then((result) => {
          if (!result) {
            res.sendStatus(404);
          } else {
            const data = result.filter(
              (data, index, self) =>
                index ===
                self.findIndex((t) => t.product_id === data.product_id)
            );

            data.forEach((e: IProductByCategory) => {
              e.convert_category_name = convertText(e.category_name);
              e.convert_product_name = convertText(e.product_name);
            });

            res.status(200).json(data);
          }
        })
        .catch((err: any) => {
          console.error(err);
          res.sendStatus(500);
        });
    }
  };

  public findCategoriesOfProduct = async (req: Request, res: Response) => {
    const productId: string = req.params.productId;

    return await this.categoryManager
      .findCategoriesOfProduct(productId)
      .then((result) => {
        if (!result) {
          res.sendStatus(404);
        } else {
          const data: ICategoriesOfProductData[] = [];
          const detail: string[] = [];
          result.forEach((e) => detail.push(e.category_name));
          data.push({ main_category: result[0].main_category, detail: detail });
          return res.status(200).json(data[0]);
        }
      })
      .catch((err: any) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

export default CategoryController;
