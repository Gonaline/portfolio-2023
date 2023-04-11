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

  public async findFixedColor(productId: string): Promise<IColor[]> {
    const sql = `SELECT IF(isnull(pc.fixed_color), "",c.color_name) AS fixed_color
    FROM ${product_color} AS pc
    INNER JOIN ${color} AS c ON c.id = pc.color_id
    WHERE pc.fixed_color = 1
    AND product_id = ?`;

    const [rows] = await this.connection.execute(sql, [productId]);
    return rows as IColor[];
  }

  public async findColorsOfFirstGroupByProductId(
    productId: string
  ): Promise<IColor[]> {
    const sql = `SELECT c.color_name
    FROM ${product_color} AS pc
    INNER JOIN ${color} AS c ON c.id = pc.color_id
    WHERE pc.first_group = 1
    AND product_id = ?
    ORDER BY c.display_order;`;

    const [rows] = await this.connection.execute(sql, [productId]);
    return rows as IColor[];
  }

  public async findColorsOfSecondGroupByProductId(
    productId: string
  ): Promise<IColor[]> {
    const sql = `SELECT c.color_name
    FROM ${product_color} AS pc
    INNER JOIN ${color} AS c ON c.id = pc.color_id
    WHERE pc.second_group = 1
    AND product_id = ?
    ORDER BY c.display_order;`;

    const [rows] = await this.connection.execute(sql, [productId]);
    return rows as IColor[];
  }
}

export default ColorManager;
