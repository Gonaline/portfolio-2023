import connection from '../database';
import { Pool } from 'mysql2/promise';
import { TABLE } from '../enums/table.enum';
import IOption from '../interfaces/option';

const product_option = TABLE.PRODUCT_OPTION;
const option_group = TABLE.OPTION_GROUP;
const option_detail = TABLE.OPTION_DETAIL;
const color = TABLE.COLOR;

class OptionManager {
  public connection: Pool;
  constructor() {
    this.connection = connection;
  }

  public async findOne(productId: string): Promise<IOption[]> {
    const sql = `SELECT og.option_name, od.option_detail_name, od.img_code, 
    IF(isnull(od.color_id_to_add), null,c.color_name) AS color,
    IF(isnull(od.option_cost), 0, po.option_price) AS option_price
    FROM ${product_option} AS po
    INNER JOIN ${option_group} as og
    ON og.id = po.option_id
    INNER JOIN ${option_detail} as od
    ON od.option_id = po.option_id
    LEFT JOIN ${color} as c
    ON c.id = od.color_id_to_add
    WHERE po.product_id = ?;`;
    const [rows] = await this.connection.execute(sql, [productId]);
    return rows as IOption[];
  }
}

export default OptionManager;
