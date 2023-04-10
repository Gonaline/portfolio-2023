import { Request, Response } from 'express';
import ProductManager from '../models/product.manager';
import OptionManager from '../models/option.manager';

class ProductController {
  constructor(
    private productManager = new ProductManager(),
    private optionManager = new OptionManager()
  ) {}

  public getProducts = async (_req: Request, res: Response) => {
    return await this.productManager
      .findAll()
      .then((result) => {
        if (!result) {
          res.sendStatus(404);
        } else {
          const product = result.forEach((e) => {
            if (!e.first_image) {
              e.first_image = e.id + '.png';
            }
          });
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
    const product = await this.productManager
      .findOne(id)
      .then((result) => {
        if (!result) {
          res.sendStatus(404);
        } else {
          return result;
        }
      })
      .catch((err: any) => {
        console.error(err);
        res.sendStatus(500);
      });

    if (product && product[0].option_id !== null) {
      let options = await this.optionManager
        .findOne(id)
        .then((result) => {
          if (!result) {
            res.sendStatus(404);
          } else {
            const options = {
              name: product[0].option_name,
              detail: result,
            };
            return options;
          }
        })
        .catch((err: any) => {
          console.error(err);
          res.sendStatus(500);
        });
      product[0].options = options;
    }

    return res.status(200).json(product);
  };
}

export default ProductController;
