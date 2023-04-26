import connection from '../database';
import { Pool } from 'mysql2/promise';
import { TABLE } from '../enums/table.enum';
import IProduct from '../interfaces/product';

const product = TABLE.PRODUCT;

class ProductManager {
  public connection: Pool;
  constructor() {
    this.connection = connection;
  }

  public async findOne(productId: string): Promise<IProduct[]> {
    const sql = `SELECT p.id AS product_id, p.product_name, p.text_introduction, p.text_size, p.mirror, p.price,
    p.first_image
    FROM ${product} AS p
    WHERE p.id = ?`;

    const [rows] = await this.connection.execute(sql, [productId]);
    return rows as any[];
  }
}

export default ProductManager;
