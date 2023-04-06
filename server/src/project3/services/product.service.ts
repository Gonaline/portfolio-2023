import connection from '../database';
import ProductModel from '../models/product.model';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async findAll(): Promise<any[]> {
    const products = await this.model.findAll();
    return products;
  }
}

export default ProductService;
