import { Request, Response } from 'express';
import ProductManager from '../models/product.manager';

class ProductController {
  constructor(private productManager = new ProductManager()) {}

  public getProducts = async (_req: Request, res: Response) => {
    return await this.productManager
      .findAll()
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

  public getProductById = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    return await this.productManager
      .findOne(id)
      .then((result) => {
        if (!result) {
          res.sendStatus(404);
        } else {
          res.status(200).json(result[0]);
        }
      })
      .catch((err: any) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

export default ProductController;
