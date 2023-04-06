import { Pool } from 'mysql2/promise';

class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async findAll(): Promise<any[]> {
    const [rows] = await this.connection.execute('SELECT * FROM product');
    return rows as any[];
  }
}

export default ProductModel;
