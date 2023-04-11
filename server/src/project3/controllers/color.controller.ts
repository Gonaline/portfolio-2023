import { Request, Response } from 'express';
import ColorManager from '../models/color.manager';

class ColorController {
  constructor(private colorManager = new ColorManager()) {}

  public getFixedColor = async (req: Request, res: Response) => {
    const productId: string = req.params.productId;
    return await this.colorManager
      .findFixedColor(productId)
      .then((result) => {
        if (result.length === 0) {
          return res.status(200).json(null);
        } else {
          return res.status(200).json(result[0].fixed_color);
        }
      })
      .catch((err: any) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  public getColorsOfFirstGroup = async (req: Request, res: Response) => {
    const productId: string = req.params.productId;
    return await this.colorManager
      .findColorsOfFirstGroupByProductId(productId)
      .then((result) => {
        if (!result) {
          res.sendStatus(404);
        } else {
          const data: string[] = [];
          result.forEach((e) => data.push(e.color_name));
          return res.status(200).json(data);
        }
      })
      .catch((err: any) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  public getColorsOfSecondGroup = async (req: Request, res: Response) => {
    const productId: string = req.params.productId;
    return await this.colorManager
      .findColorsOfSecondGroupByProductId(productId)
      .then((result) => {
        if (result.length === 0) {
          return res.status(200).json(null);
        } else {
          const data: string[] = [];
          result.forEach((e) => data.push(e.color_name));
          return res.status(200).json(data);
        }
      })
      .catch((err: any) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

export default ColorController;
