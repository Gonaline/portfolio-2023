import IProduct from '../../interfaces/product';
import connection from '../database';
import { Pool } from 'mysql2/promise';
import { TABLE } from '../enums/table.enum';
const product = TABLE.PRODUCT;

class ProductManager {
  public connection: Pool;
  constructor() {
    this.connection = connection;
  }

  public async findAll(): Promise<IProduct[]> {
    const sql = `SELECT * FROM ${product} ORDER BY product_order`;
    const [rows] = await this.connection.execute(sql);
    return rows as IProduct[];
  }

  public async findOne(id: string): Promise<IProduct[]> {
    const sql = `SELECT * FROM ${product} WHERE id = ?`;
    const [rows] = await this.connection.execute(sql, [id]);
    return rows as IProduct[];
  }
}

export default ProductManager;
