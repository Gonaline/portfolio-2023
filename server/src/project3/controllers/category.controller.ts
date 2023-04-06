import { Request, Response } from 'express';
import CategoryManager from '../models/category.manager';
import { convertText } from '../../utils/convertText';
import ICategory from '../interfaces/category';

class CategoryController {
  constructor(private categoryManager = new CategoryManager()) {}

  public findAllCategoriesWithConvertName = async (
    _req: Request,
    res: Response
  ) => {
    return await this.categoryManager.findAll().then((result) => {
      result.forEach((e: ICategory) => {
        e.convert_category_name = convertText(e.category_name);
      });
      return result;
    });
  };

  public getCategories = async (_req: Request, res: Response) => {
    return await this.categoryManager
      .findAll()
      .then((result) => {
        if (!result) {
          res.sendStatus(404);
        } else {
          result.forEach((e: ICategory) => {
            e.convert_category_name = convertText(e.category_name);
          });
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
    const categories = await this.findAllCategoriesWithConvertName(req, res);

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
        .findProductsByCategory(id)
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
    }
  };
}

export default CategoryController;
