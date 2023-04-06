import IProduct from '../interfaces/product';
import connection from '../database';
import { Pool } from 'mysql2/promise';
import { TABLE } from '../enums/table.enum';
import ICategory from '../interfaces/category';
const category = TABLE.CATEGORY;

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

  public async findOne(convertName: string): Promise<ICategory[]> {
    const sql = `SELECT * FROM ${category} WHERE id = ?`;
    //     SELECT pc.product_id, c.category_name
    // FROM stickers_shop.product_category AS pc
    // INNER JOIN stickers_shop.category AS c
    // WHERE pc.category_id = c.id
    // AND c.category_name = 'les Savanimo';

    const [rows] = await this.connection.execute(sql, [convertName]);
    return rows as ICategory[];
  }
}

export default CategoryManager;
