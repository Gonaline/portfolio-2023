import connection from '../database';
import { Pool } from 'mysql2/promise';
import { TABLE } from '../enums/table.enum';
import ICategory from '../interfaces/category';
import { COLLECTION } from '../enums/collection.enum';
import IProductsByCategory from '../interfaces/productsByCategory';

const product = TABLE.PRODUCT;
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

  public async findProductsByCategory(
    id: string,
    convertName: string
  ): Promise<IProductsByCategory[]> {
    let sql = '';

    if (convertName === COLLECTION.ALL_COLLECTIONS_CONVERT_NAME) {
      sql = `SELECT DISTINCT(pc.product_id), c.id AS category_id, c.category_name, p.product_name, IFNULL(p.first_image, CONCAT(pc.product_id, ".png")) AS first_image
      FROM ${product_category} AS pc
      INNER JOIN ${category} AS c
      ON pc.category_id = c.id
      INNER JOIN ${product} AS p
      ON pc.product_id = p.id
      ORDER BY p.product_order`;

      const [rows] = await this.connection.execute(sql);
      return rows as IProductsByCategory[];
    } else {
      sql = `SELECT pc.product_id, c.id AS category_id, c.category_name, p.product_name, IFNULL(p.first_image, CONCAT(pc.product_id, ".png")) AS first_image
      FROM ${product_category} AS pc
      INNER JOIN ${category} AS c
      ON pc.category_id = c.id
      INNER JOIN ${product} AS p
      ON pc.product_id = p.id
      WHERE pc.category_id = ?
      ORDER BY p.product_order`;

      const [rows] = await this.connection.execute(sql, [id]);
      return rows as IProductsByCategory[];
    }
  }
}

export default CategoryManager;
