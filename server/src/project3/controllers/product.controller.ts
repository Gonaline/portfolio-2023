import { Request, Response } from 'express';
import ProductManager from '../models/product.manager';

class ProductController {
  constructor(private productManager = new ProductManager()) {}

  public getProductById = async (req: Request, res: Response) => {
    const productId: string = req.params.productId;
    return await this.productManager
      .findOne(productId)
      .then((result) => {
        if (!result) {
          res.sendStatus(404);
        } else {
          return res.status(200).json(result[0]);
        }
      })
      .catch((err: any) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

export default ProductController;
