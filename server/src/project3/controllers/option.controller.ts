import { Request, Response } from 'express';
import OptionManager from '../models/option.manager';
import IOptionData from '../interfaces/optionData';

class OptionController {
  constructor(private optionManager = new OptionManager()) {}

  public getOption = async (req: Request, res: Response) => {
    const productId: string = req.params.productId;
    return await this.optionManager
      .findOne(productId)
      .then((result) => {
        if (result.length === 0) {
          return res.status(200).json(null);
        } else {
          const data: IOptionData[] = [];
          const detail: any[] = [];
          result.forEach((e) =>
            detail.push({
              name: e.option_detail_name,
              price: e.option_price,
              img_code: e.img_code,
            })
          );
          data.push({ name: result[0].option_name, detail: detail });
          return res.status(200).json(data[0]);
        }
      })
      .catch((err: any) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

export default OptionController;
