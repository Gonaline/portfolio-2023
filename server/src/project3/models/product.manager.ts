import IProduct from '../interfaces/product';
import connection from '../database';
import { Pool } from 'mysql2/promise';
import { TABLE } from '../enums/table.enum';

const product = TABLE.PRODUCT;
const option_group = TABLE.OPTION_GROUP;
const product_category = TABLE.PRODUCT_CATEGORY;
const category = TABLE.CATEGORY;
const color = TABLE.COLOR;

class ProductManager {
  public connection: Pool;
  constructor() {
    this.connection = connection;
  }

  public async findAll(): Promise<IProduct[]> {
    const sql = `SELECT id, product_name, first_image FROM ${product} ORDER BY product_order`;
    const [rows] = await this.connection.execute(sql);
    return rows as IProduct[];
  }

  public async findOne(id: string): Promise<any[]> {
    const sql = `SELECT p.id AS product_id, p.product_name, p.text_introduction, p.text_size, p.mirror, p.price,
    IFNULL(p.first_image, CONCAT(p.id, ".png")) AS first_image,
    IF(pc.main_category = 1, c.category_name,'') AS main_category, color.color_name AS fixed_color
    FROM ${product} AS p
    LEFT JOIN ${option_group} AS o ON o.id = p.option_id
    LEFT JOIN ${product_category} AS pc ON pc.product_id = p.id
    LEFT JOIN ${category} AS c ON c.id = pc.category_id
    LEFT JOIN ${color} AS color ON color.id = p.fixed_color_id
    WHERE pc.main_category = 1
    AND p.id = ?`;

    const [rows] = await this.connection.execute(sql, [id]);
    return rows as any[];
  }
}

export default ProductManager;
