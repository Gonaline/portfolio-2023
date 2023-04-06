import { Request, Response } from 'express';
import CategoryManager from '../models/category.manager';
import { convertText } from '../../utils/convertText';
import ICategory from '../interfaces/category';

class CategoryController {
  constructor(private categoryManager = new CategoryManager()) {}

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
    // const allCategories = await this.categoryManager.findAll();
    // const [categoryName] = allCategories.filter(
    //   (e) => e.convert_category_name === convertName
    // );
    // console.log(`categoryName: ${categoryName}`);

    const allCategories = this.getCategories(req, res);
    console.log(`allCategories: ${JSON.stringify(allCategories)}`);

    return await this.categoryManager
      .findOne(convertName)
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
}

export default CategoryController;
