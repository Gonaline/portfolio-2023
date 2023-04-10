import connection from '../database';
import { Pool } from 'mysql2/promise';
import { TABLE } from '../enums/table.enum';

const product = TABLE.PRODUCT;
const option_group = TABLE.OPTION_GROUP;
const option_detail = TABLE.OPTION_DETAIL;

class OptionManager {
  public connection: Pool;
  constructor() {
    this.connection = connection;
  }

  public async findOne(id: string): Promise<any[]> {
    const sql = `SELECT od.option_detail_name AS name, od.img_code, IF(od.option_cost = 1, p.price_option,0) AS price
    FROM ${product} AS p
    INNER JOIN ${option_group} as o ON o.id = p.option_id  
    INNER JOIN ${option_detail} as od ON od.option_id = o.id  
    WHERE p.id = ?`;
    const [rows] = await this.connection.execute(sql, [id]);
    return rows as any[];
  }
}

export default OptionManager;
