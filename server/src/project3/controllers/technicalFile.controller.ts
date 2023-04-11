import { Request, Response } from 'express';
import TechnicalFileManager from '../models/technicalFile.manager';

class TechnicalFileController {
  constructor(private technicalFileManager = new TechnicalFileManager()) {}

  public getTechnicalFiles = async (req: Request, res: Response) => {
    const productId: string = req.params.productId;
    return await this.technicalFileManager
      .findAll(productId)
      .then((result) => {
        if (!result) {
          res.sendStatus(404);
        } else {
          const files: string[] = [];
          result.forEach((e) => files.push(e.file_name));
          return res.status(200).json(files);
        }
      })
      .catch((err: any) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

export default TechnicalFileController;
