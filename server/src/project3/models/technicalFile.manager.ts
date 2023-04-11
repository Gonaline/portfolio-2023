import connection from '../database';
import { Pool } from 'mysql2/promise';
import { TABLE } from '../enums/table.enum';
import IFile from '../interfaces/file';

const technical_file = TABLE.TECHNICAL_FILE;

class TechnicalFileManager {
  public connection: Pool;
  constructor() {
    this.connection = connection;
  }

  public async findAll(productId: string): Promise<IFile[]> {
    const sql = `SELECT file_name
    FROM ${technical_file}
    WHERE product_id = ?`;
    const [rows] = await this.connection.execute(sql, [productId]);
    return rows as IFile[];
  }
}

export default TechnicalFileManager;
