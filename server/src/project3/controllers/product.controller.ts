// pour test
import { Request, Response } from 'express';
import { TABLE } from '../enums/table.enum';

const database = require('../database');
class ProductController {
  static getProducts = (req: Request, res: Response) => {
    database
      .query(`select * from ${TABLE.PRODUCT}`)
      .then(([result]: any[]) => {
        res.send(result);
      })
      .catch((err: any) => {
        console.error(err);
        res.status(500).send('Error retrieving data from database');
      });
  };

  static getProductById = (req: Request, res: Response) => {
    const id = req.params.id;
    database
      .query(`SELECT * FROM ${TABLE.PRODUCT} WHERE id = ?`, [id])
      .then(([result]: any[]) => {
        res.send(result);
      })
      .catch((err: any) => {
        console.error(err);
        res.status(500).send('Error retrieving data from database');
      });
  };
}

module.exports = ProductController;
