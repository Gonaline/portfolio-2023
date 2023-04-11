import connection from '../database';
import { Pool } from 'mysql2/promise';
import { TABLE } from '../enums/table.enum';
import IColor from '../interfaces/color';

const color = TABLE.COLOR;
const product_color = TABLE.PRODUCT_COLOR;

class ColorManager {
  public connection: Pool;
  constructor() {
    this.connection = connection;
  }

  public async getColors(productId: string): Promise<IColor[]> {
    const sql = `SELECT IF(isnull(pc.fixed_color), "",c.color_name) AS fixed_color,
    IF(isnull(pc.first_group), "",c.color_name) AS first_group,
    IF(isnull(pc.second_group), "",c.color_name) AS second_group
        FROM ${product_color} AS pc
        INNER JOIN ${color} AS c ON c.id = pc.color_id
        WHERE pc.product_id = ?
        ORDER BY c.display_order;`;

    const [rows] = await this.connection.execute(sql, [productId]);
    return rows as IColor[];
  }
}

export default ColorManager;
