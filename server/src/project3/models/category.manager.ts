import IProduct from '../interfaces/product';
import connection from '../database';
import { Pool } from 'mysql2/promise';
import { TABLE } from '../enums/table.enum';
import ICategory from '../interfaces/category';

const category = TABLE.CATEGORY;
const product_category = TABLE.PRODUCT_CATEGORY;

class CategoryManager {
  public connection: Pool;
  constructor() {
    this.connection = connection;
  }

  public async findAll(): Promise<ICategory[]> {
    const sql = `SELECT * FROM ${category}`;
    const [rows] = await this.connection.execute(sql);
    return rows as ICategory[];
  }

  public async findProductsByCategory(id: string): Promise<ICategory[]> {
    const sql = `SELECT pc.product_id, c.id, c.category_name
    FROM ${product_category} AS pc
    INNER JOIN ${category} AS c
    WHERE pc.category_id = c.id
    AND pc.category_id = ?`;

    const [rows] = await this.connection.execute(sql, [id]);
    return rows as ICategory[];
  }
}

export default CategoryManager;
