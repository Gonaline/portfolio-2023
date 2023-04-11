import { Request, Response } from 'express';
import ColorManager from '../models/color.manager';

class ColorController {
  constructor(private colorManager = new ColorManager()) {}

  public getColors = async (req: Request, res: Response) => {
    const productId: string = req.params.productId;
    return await this.colorManager
      .getColors(productId)
      .then((result) => {
        if (!result) {
          res.sendStatus(404);
        } else {
          const data = [];
          const fixed_color: any[] = result.filter((e) => e.fixed_color !== '');

          const first_group = result
            .filter((e) => e.first_group !== '')
            .map((el) => el.first_group);

          const second_group = result
            .filter((e) => e.second_group !== '')
            .map((el) => el.second_group);

          data.push({
            fixed_color:
              fixed_color.length !== 0 ? fixed_color[0].fixed_color : null,
            first_group: first_group,
            second_group: second_group,
          });

          return res.status(200).json(data[0]);
        }
      })
      .catch((err: any) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

export default ColorController;
